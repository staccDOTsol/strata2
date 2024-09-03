import { NATIVE_MINT } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { BondingHierarchy } from ".";

/**
 * Traverse a bonding hierarchy, executing func and accumulating
 * the results until destination token
 *
 * @param param0
 * @returns
 */
function reduce<A>({
  hierarchy,
  func,
  initial,
  destination,
  wrappedSolMint,
}: {
  hierarchy?: BondingHierarchy;
  func: (acc: A, current: BondingHierarchy) => A;
  initial: A;
  destination: PublicKey;
  wrappedSolMint: PublicKey;
}): A {
  if (
    !hierarchy ||
    hierarchy.child?.tokenBonding.baseMint.equals(destination)
  ) {
    return initial;
  }

  if (destination?.equals(NATIVE_MINT)) {
    destination = wrappedSolMint;
  }

  let current: BondingHierarchy | undefined = hierarchy;
  let value = func(initial, current!);
  while (!current!.tokenBonding.baseMint.equals(destination)) {
    current = current!.parent;
    if (!current) {
      throw new Error(
        `Base mint ${destination.toBase58()} is not in the hierarchy for ${hierarchy.tokenBonding.publicKey.toBase58()}`
      );
    }
    value = func(value, current);
  }

  return value;
}

/**
 * Traverse a bonding hierarchy, executing func and accumulating
 * the results until destination token starting from parent going to children
 *
 * @param param0
 * @returns
 */
async function reduceFromParent<A>({
  hierarchy,
  func,
  initial,
  destination,
  wrappedSolMint,
}: {
  hierarchy?: BondingHierarchy;
  func: (acc: A, current: BondingHierarchy) => Promise<A>;
  initial: A;
  destination: PublicKey;
  wrappedSolMint: PublicKey;
}): Promise<A> {
  if (!hierarchy) {
    return initial;
  }

  if (destination?.equals(NATIVE_MINT)) {
    destination = wrappedSolMint;
  }

  let current: BondingHierarchy | undefined = hierarchy;
  while (!current!.tokenBonding.baseMint.equals(destination)) {
    current = current!.parent;
    if (!current) {
      throw new Error(
        `Base mint ${destination.toBase58()} is not in the hierarchy for ${hierarchy.tokenBonding.publicKey.toBase58()}`
      );
    }
  }
  destination = hierarchy.tokenBonding.targetMint;

  let value = func(initial, current!);
  while (!current!.tokenBonding.targetMint.equals(destination)) {
    current = current!.child;
    value = func(await value, current!);
  }

  return value;
}

function now(): number {
  return new Date().valueOf() / 1000;
}

export interface IBondingPricing {

  get hierarchy(): BondingHierarchy;

  current(baseMint: PublicKey, unixTime?: number): number;

  locked(baseMint?: PublicKey): number;

   swap(
    baseAmount: number,
    baseMint: PublicKey,
    targetMint: PublicKey,
    ignoreFrozen: boolean,
    unixTime?: number,
    
  ): Promise<number>;

  isBuying(
    lowMint: PublicKey,
    targetMint: PublicKey,
  ): boolean;

  swapTargetAmount(
    targetAmount: number,
    baseMint: PublicKey,
    targetMint: PublicKey,
    /** Ignore frozen curves, just compute the value. */
    ignoreFreeze: boolean,
    unixTime?: number,
    baseAmount?: number
  ): Promise<number>;

  sellTargetAmount(
    targetAmountNum: number,
    baseMint?: PublicKey,
    unixTime?: number,
    baseAmount?: number
  ): number;

  buyTargetAmount(
    targetAmountNum: number,
    baseMint?: PublicKey,
    unixTime?: number,
    baseAmount?: number
  ): number;

  buyWithBaseAmount(
    baseAmountNum: number,
    baseMint?: PublicKey,
    unixTime?: number,
    baseAmount?: number
  ): Promise<number> ;
}

export class BondingPricing implements IBondingPricing {
  hierarchy: BondingHierarchy;

  constructor(args: { hierarchy: BondingHierarchy }) {
    this.hierarchy = args.hierarchy;
  }

  current(
    baseMint?: PublicKey,
    unixTime?: number
  ): number {
    return reduce({
      hierarchy: this.hierarchy,
      func: (acc: number, current: BondingHierarchy) => {
        return (
          acc *
          current.pricingCurve.current(
            unixTime || now(),
            current.tokenBonding.buyBaseRoyaltyPercentage,
            current.tokenBonding.buyTargetRoyaltyPercentage
          )
        );
      },
      initial: 1,
      destination: baseMint || this.hierarchy.tokenBonding.baseMint,
      wrappedSolMint: this.hierarchy.wrappedSolMint,
    });
  }

  locked(baseMint?: PublicKey): number {
    return reduce({
      hierarchy: this.hierarchy.parent,
      func: (acc: number, current: BondingHierarchy) => {
        return (
          acc *
          current.pricingCurve.current(
            now(),
            current.tokenBonding.buyBaseRoyaltyPercentage,
            current.tokenBonding.buyTargetRoyaltyPercentage
          )
        );
      },
      initial: this.hierarchy.pricingCurve.locked(),
      destination: baseMint || this.hierarchy.tokenBonding.baseMint,
      wrappedSolMint: this.hierarchy.wrappedSolMint,
    });
  }

  async swap(
    baseAmount: number,
    baseMint: PublicKey,
    targetMint: PublicKey,
    ignoreFrozen: boolean = false,
    unixTime?: number,
    ba?: number
  ): Promise<number> {
    //console.log(`Swap called with baseAmount: ${baseAmount}, baseMint: ${baseMint.toBase58()}, targetMint: ${targetMint.toBase58()}`);
    
    const lowMint = this.hierarchy.lowest(baseMint, targetMint);
    const highMint = this.hierarchy.highest(baseMint, targetMint);
    //console.log(`Lowest mint: ${lowMint.toBase58()}, Highest mint: ${highMint.toBase58()}`);
    
    const isBuying = this.isBuying(
      lowMint,
      targetMint,
    );
    //console.log(`Is buying: ${isBuying}`);

    const path = this.hierarchy.path(lowMint, highMint, ignoreFrozen);
    //console.log(`Path length: ${path.length}`);

    if (path.length == 0) {
      console.error(`No path found from ${baseMint.toBase58()} to ${targetMint.toBase58()}`);
      throw new Error(`No path from ${baseMint.toBase58()} to ${targetMint.toBase58()}`);
    }
    let result;
    if (isBuying) {
      result = baseAmount;
      const reversedPath = path.reverse();
      for (let i = 0; i < reversedPath.length; i++) {
        const { pricingCurve, tokenBonding } = reversedPath[i];
        //console.log(`Buying step ${i + 1}: Amount before: ${result}`);
        result = await pricingCurve.buyWithBaseAmount(
          result,
          tokenBonding.buyBaseRoyaltyPercentage,
          tokenBonding.buyTargetRoyaltyPercentage,
          unixTime,
          ba
        );
        //console.log(`Buying step ${i + 1}: Amount after: ${result}`);
      }
      return result 
    } else {
      result = baseAmount;
      for (let i = 0; i < path.length; i++) {
        const { pricingCurve, tokenBonding } = path[i];
        //console.log(`Selling step ${i + 1}: Amount before: ${result}`);
        result = await pricingCurve.sellTargetAmount(
          result,
          tokenBonding.sellBaseRoyaltyPercentage,
          tokenBonding.sellTargetRoyaltyPercentage,
          unixTime,
          ba
        );
        //console.log(`Selling step ${i + 1}: Amount after: ${result}`);
      }
      return result
    }

  }

  isBuying(
    lowMint: PublicKey,
    targetMint: PublicKey,
  ) {
    return lowMint.equals(targetMint);
  }

 async swapTargetAmount(
    targetAmount: number,
    baseMint: PublicKey,
    targetMint: PublicKey,
    /** Ignore frozen curves, just compute the value. */
    ignoreFreeze: boolean = false,
    unixTime?: number,
    baseAmount?: number
  ): Promise<number> {
    //console.log(`swapTargetAmount called with targetAmount: ${targetAmount}, baseMint: ${baseMint.toBase58()}, targetMint: ${targetMint.toBase58()}`);
    const lowMint = this.hierarchy.lowest(baseMint, targetMint);
    const highMint = this.hierarchy.highest(baseMint, targetMint);
    //console.log(`Lowest mint: ${lowMint.toBase58()}, Highest mint: ${highMint.toBase58()}`);
    
    const isBuying = this.isBuying(lowMint, targetMint);
    //console.log(`Is buying: ${isBuying}`);

    const path = this.hierarchy.path(lowMint, highMint, ignoreFreeze);
    //console.log(`Path length: ${path.length}`);

    if (path.length == 0) {
      console.error(`No path found from ${baseMint.toBase58()} to ${targetMint.toBase58()}`);
      throw new Error(`No path from ${baseMint.toBase58()} to ${targetMint.toBase58()}`);
    }
    let result;
    if (isBuying) {
      result = targetAmount;
      const reversedPath = path.reverse();
      for (let index = 0; index < reversedPath.length; index++) {
        const { pricingCurve, tokenBonding } = reversedPath[index];
        //console.log(`Buying step ${index + 1}: Amount before: ${result}`);
        result = await pricingCurve.buyWithBaseAmount(
          result,
          tokenBonding.buyBaseRoyaltyPercentage,
          tokenBonding.buyTargetRoyaltyPercentage,
          unixTime,
          baseAmount
        );
        //console.log(`Buying step ${index + 1}: Amount after: ${result}`);
      }
    } else {
      result = targetAmount;
      const reversedPath = path.reverse();
      for (let index = 0; index < reversedPath.length; index++) {
        const { pricingCurve, tokenBonding } = reversedPath[index];
        //console.log(`Selling step ${index + 1}: Amount before: ${result}`);
        result = await pricingCurve.sellTargetAmount(
          result,
          tokenBonding.sellBaseRoyaltyPercentage,
          tokenBonding.sellTargetRoyaltyPercentage,
          unixTime,
          baseAmount
        );
        //console.log(`Selling step ${index + 1}: Amount after: ${result}`);
      }
    }

    //console.log(`swapTargetAmount result: ${result}`);
    return result;
  }

  sellTargetAmount(
    targetAmountNum: number,
    baseMint?: PublicKey,
    unixTime?: number,
    baseAmount?: number
  ): number {
    return reduce({
      hierarchy: this.hierarchy,
      func: (acc: number, current: BondingHierarchy) => {
        return current.pricingCurve.sellTargetAmount(
          acc,
          current.tokenBonding.sellBaseRoyaltyPercentage,
          current.tokenBonding.sellTargetRoyaltyPercentage,
          unixTime
        );
      },
      initial: targetAmountNum,
      destination: baseMint || this.hierarchy.tokenBonding.baseMint,
      wrappedSolMint: this.hierarchy.wrappedSolMint,
    });
  }

  buyTargetAmount(
    targetAmountNum: number,
    baseMint?: PublicKey,
    unixTime?: number,
    baseAmount?: number
  ): number {
    return reduce({
      hierarchy: this.hierarchy,
      func: (acc: number, current: BondingHierarchy) => {
        return current.pricingCurve.buyTargetAmount(
          acc,
          current.tokenBonding.buyBaseRoyaltyPercentage,
          current.tokenBonding.buyTargetRoyaltyPercentage,
          unixTime
        );
      },
      initial: targetAmountNum,
      destination: baseMint || this.hierarchy.tokenBonding.baseMint,
      wrappedSolMint: this.hierarchy.wrappedSolMint,
    });
  }

  async buyWithBaseAmount(
    baseAmountNum: number,
    baseMint?: PublicKey,
    unixTime?: number,
    baseAmount?: number
  ): Promise<number> {
    return await reduceFromParent({
      hierarchy: this.hierarchy,
      func: async(acc: number, current: BondingHierarchy) => {
        return await current.pricingCurve.buyWithBaseAmount(
          acc,
          current.tokenBonding.buyBaseRoyaltyPercentage,
          current.tokenBonding.buyTargetRoyaltyPercentage,
          unixTime,
          baseAmount
        );
      },
      initial: baseAmountNum,
      destination: baseMint || this.hierarchy.tokenBonding.baseMint,
      wrappedSolMint: this.hierarchy.wrappedSolMint,
    });
  }
}
