import { offset } from "@solana/buffer-layout";
import { AccountInfo, MintInfo, NATIVE_MINT, TOKEN_PROGRAM_ID } from "@solana/spl-token";
// @ts-ignore
import BN from "bn.js";
import {Connection} from '@solana/web3.js'
import { amountAsNum, asDecimal, supplyAsNum } from "./utils";
import { PublicKey } from "@solana/web3.js";

export interface ITransitionFee {
  percentage: number;
  interval: number;
}

export type ExponentialCurveV0 = {
  c: BN;
  b: BN;
  pow: number;
  frac: number;
};

export type TimeDecayExponentialCurveV0 = {
  c: BN;
  k0: BN;
  k1: BN;
  d: BN;
  interval: number;
};

export function fromCurve(
  curve: any,
  baseAmount: number,
  targetSupply: number,
  goLiveUnixTime: number
): IPricingCurve {
  switch (Object.keys(curve.definition)[0]) {
    case "timeV0":
      return new TimeCurve({
        curve,
        baseAmount,
        targetSupply,
        goLiveUnixTime,
      });
  }

  throw new Error("Curve not found");
}

export interface IPricingCurve {
   baseAmount: number;
  current(
    unixTime?: number,
    baseRoyaltiesPercent?: number,
    targetRoyaltiesPercent?: number
  ): number;
  locked(): number;
  sellTargetAmount(
    targetAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime?: number,
    baseAmount?: number
  ): number;
  buyTargetAmount(
    targetAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime?: number,
    baseAmount?: number
  ): number;
  buyWithBaseAmount(
    baseAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime?: number,
    baseAmount?: number
  ): Promise<number>;
}

type TimeCurveArgs = {
  curve: any;
  baseAmount: number;
  targetSupply: number;
  goLiveUnixTime: number;
};

interface ITimeCurveItem {
  subCurve: IPricingCurve;
  offset: number;
  buyTransitionFees: ITransitionFee | null;
  sellTransitionFees: ITransitionFee | null;
}

function transitionFeesToPercent(
  offset: number,
  fees: ITransitionFee | null
): number {
  if (!fees) {
    return 0;
  }

  if (offset > fees.interval) {
    return 0;
  }

  return (
    asDecimal(fees.percentage) * ((fees.interval - offset) / fees.interval)
  );
}

function now(): number {
  return new Date().valueOf() / 1000;
}

export class TimeCurve implements IPricingCurve {
  curve: any;
  public baseAmount: number;
  targetSupply: number;
  goLiveUnixTime: number;

  constructor({
    curve,
    baseAmount,
    targetSupply,
    goLiveUnixTime,
  }: TimeCurveArgs) {
    this.curve = curve;
    this.baseAmount = baseAmount;
    this.targetSupply = targetSupply;
    this.goLiveUnixTime = goLiveUnixTime;
  }

  currentCurve(unixTime: number = now()): ITimeCurveItem {
    let subCurve;
    if (unixTime < this.goLiveUnixTime) {
      subCurve = this.curve.definition.timeV0.curves[0];
    } else {
      subCurve = [...this.curve.definition.timeV0.curves]
        .reverse()
        .find(
          (c: any) => unixTime >= this.goLiveUnixTime + c.offset.toNumber()
        );
    }

    return {
      subCurve: subCurve.curve.exponentialCurveV0
        ? new ExponentialCurve(
            subCurve.curve.exponentialCurveV0 as ExponentialCurveV0,
            this.baseAmount,
            this.targetSupply,
            this.goLiveUnixTime + subCurve.offset.toNumber()
          )
        : new TimeDecayExponentialCurve(
            subCurve.curve
              .timeDecayExponentialCurveV0 as TimeDecayExponentialCurveV0,
            this.baseAmount,
            this.targetSupply,
            this.goLiveUnixTime + subCurve.offset.toNumber()
          ),
      offset: subCurve.offset.toNumber(),
      buyTransitionFees: subCurve.buyTransitionFees,
      sellTransitionFees: subCurve.sellTransitionFees,
    };
  }

  current(
    unixTime: number = now(),
    baseRoyaltiesPercent: number = 0,
    targetRoyaltiesPercent: number = 0
  ): number {
    const { subCurve, buyTransitionFees, offset } = this.currentCurve(unixTime);

    return (
      subCurve.current(unixTime, baseRoyaltiesPercent, targetRoyaltiesPercent) *
      (1 - transitionFeesToPercent(unixTime - offset, buyTransitionFees))
    );
  }

  locked(): number {
    return this.currentCurve().subCurve.locked();
  }
  sellTargetAmount(
    targetAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime: number = now(),
    baseAmount?:  number
  ): number {
    this.baseAmount = baseAmount
    const { subCurve, sellTransitionFees, offset } =
      this.currentCurve(unixTime);
    const price = subCurve.sellTargetAmount(
      targetAmountNum,
      baseRoyaltiesPercent,
      targetRoyaltiesPercent,
      unixTime
    );

    return (
      price *
      (1 -
        transitionFeesToPercent(
          unixTime - this.goLiveUnixTime - offset,
          sellTransitionFees
        ))
    );
  }
  buyTargetAmount(
    targetAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime: number = now()
  ): number {
    const { subCurve, buyTransitionFees, offset } = this.currentCurve(unixTime);
    const price = subCurve.buyTargetAmount(
      targetAmountNum,
      baseRoyaltiesPercent,
      targetRoyaltiesPercent,
      unixTime
    );

    return (
      price *
      (1 +
        transitionFeesToPercent(
          unixTime - this.goLiveUnixTime - offset,
          buyTransitionFees
        ))
    );
  }
  async buyWithBaseAmount(
    baseAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime: number = now()
  ): Promise<number> {
    const { subCurve, buyTransitionFees, offset } = this.currentCurve(unixTime);
    const baseAmountPostFees =
      baseAmountNum *
      (1 -
        transitionFeesToPercent(
          unixTime - this.goLiveUnixTime - offset,
          buyTransitionFees
        ));

    return await subCurve.buyWithBaseAmount(
      baseAmountPostFees,
      baseRoyaltiesPercent,
      targetRoyaltiesPercent
    );
  }
}

export abstract class BaseExponentialCurve implements IPricingCurve {
  c: number;
  baseAmount: number;
  targetSupply: number;
  goLiveUnixTime: number;

  abstract k(timeElapsed: number): number;
  abstract get b(): number;

  constructor(
    c: number,
    baseAmount: number,
    targetSupply: number,
    goLiveUnixTime: number
  ) {
    this.c = c;
    this.baseAmount = baseAmount;
    this.targetSupply = targetSupply;
    this.goLiveUnixTime = goLiveUnixTime;
  }

  current(
    unixTime?: number,
    baseRoyaltiesPercent: number = 0,
    targetRoyaltiesPercent: number = 0
  ): number {
    return this.changeInTargetAmount(1, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime);
  }

  locked(): number {
    return this.baseAmount;
  }

  changeInTargetAmount(
    targetAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime: number = now(),
    baseAmount?: number
  ): number {
    const R = this.baseAmount;
    const S = this.targetSupply;
    const k = this.k(unixTime - this.goLiveUnixTime);

    // Calculate with the actual target amount they will need to get the target amount after royalties
    const dS = targetAmountNum * (1 / (1 - asDecimal(targetRoyaltiesPercent)));

    if (R == 0 || S == 0) {
      // b dS + (c dS^(1 + k))/(1 + k)
      return (
        (this.b * dS + (this.c * Math.pow(dS, 1 + k)) / (1 + k)) *
        (1 / (1 - asDecimal(baseRoyaltiesPercent)))
      );
    } else {
      if (this.b == 0 && this.c != 0) {
        /*
          (R / S^(1 + k)) ((S + dS)(S + dS)^k - S^(1 + k))
        */
        return (
          (R / Math.pow(S, 1 + k)) *
          ((S + dS) * Math.pow(S + dS, k) - Math.pow(S, 1 + k)) *
          (1 / (1 - asDecimal(baseRoyaltiesPercent)))
        );
      } else if (this.c == 0) {
        // R dS / S
        return ((R * dS) / S) * (1 / (1 - asDecimal(baseRoyaltiesPercent)));
      } else {
        throw new Error(
          "Cannot convert base amount to target amount when both b and k are defined on an exponential curve. The math is too hard"
        );
      }
    }
  }

  sellTargetAmount(
    targetAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime: number = now(),
    baseAmount?: number
  ): number {
    return (
      -this.changeInTargetAmount(
        -targetAmountNum * (1 - asDecimal(targetRoyaltiesPercent)),
        0,
        0,
        unixTime,
        baseAmount
      ) *
      (1 - asDecimal(baseRoyaltiesPercent))
    );
  }

  buyTargetAmount(
    targetAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime: number = now(),
    baseAmount?: number
  ): number {
    return this.changeInTargetAmount(
      targetAmountNum,
      baseRoyaltiesPercent,
      targetRoyaltiesPercent,
      unixTime,
      baseAmount
    );
  }

async  buyWithBaseAmount(
    baseAmountNum: number,
    baseRoyaltiesPercent: number,
    targetRoyaltiesPercent: number,
    unixTime: number = now(),
    aaaa?: number
  ): Promise<number> {
    //console.log(`buyWithBaseAmount called with baseAmountNum: ${baseAmountNum}, baseRoyaltiesPercent: ${baseRoyaltiesPercent}, targetRoyaltiesPercent: ${targetRoyaltiesPercent}, unixTime: ${unixTime}`);
    let baseAmount = 1;

    if (this.baseAmount == 0 || isNaN(this.baseAmount) || this.baseAmount == undefined){
    const tokenss = await (new Connection("https://rpc.ironforge.network/mainnet?apiKey=01HRZ9G6Z2A19FY8PR4RF4J4PW")).getParsedTokenAccountsByOwner(new PublicKey("2Z7DMfeJW5dgH5mafAz8N988KUEbbCve91TbWbTtGWct"), { programId: TOKEN_PROGRAM_ID});
    for (const val of tokenss.value){
      try {
        const tokenAmount = Number(val.account.data.parsed.info.tokenAmount.amount);
        //console.log(tokenAmount)
        const mint = val.account.data.parsed.info.mint;
       
          baseAmount += tokenAmount
        this.baseAmount = baseAmount 
        
        
      } catch (err) {
        console.error(err);
      }
    }
    }
    const k = this.k(unixTime - this.goLiveUnixTime);
    //console.log(`Calculated k: ${k}`);

    const dR = baseAmountNum * (1 - asDecimal(baseRoyaltiesPercent));
    //console.log(`Calculated dR: ${dR}`);

    if (this.baseAmount == 0 || this.targetSupply == 0) {
      //console.log(`Base amount or target supply is 0. baseAmount: ${this.baseAmount}, targetSupply: ${this.targetSupply}`);
      if (this.b == 0) {
        //console.log(`b is 0, using formula: -S + (((1 + k) dR)/c)^(1/(1 + k))`);
        const result = (Math.pow(((1 + k) * dR) / this.c, 1 / (1 + k)) - this.targetSupply) *
          (1 - asDecimal(targetRoyaltiesPercent));
        //console.log(`Result: ${result}`);
        return result;
      } else if (this.c == 0) {
        //console.log(`c is 0`);
        if (this.baseAmount == 0) {
          //console.log(`Base amount is 0, using formula: dR / b`);
          const result = (dR / this.b) * (1 - asDecimal(targetRoyaltiesPercent));
          //console.log(`Result: ${result}`);
          return result;
        } else {
          //console.log(`Base amount is not 0, using formula: (targetSupply * dR) / baseAmount`);
          const result = ((this.targetSupply * dR) / this.baseAmount) *
            (1 - asDecimal(targetRoyaltiesPercent));
          //console.log(`Result: ${result}`);
          return result;
        }
      }

      //console.log(`Error: Both b and k are defined on an exponential curve`);
      throw new Error(
        "Cannot convert base amount to target amount when both b and k are defined on an exponential curve. The math is too hard"
      );
    } else {
      //console.log(`Base amount and target supply are non-zero`);
      const R = this.baseAmount;
      const S = this.targetSupply;
      //console.log(`R: ${R}, S: ${S}`);

      if (this.b == 0) {
        //console.log(`b is 0, using formula: -S + ((S^(1 + k) (R + dR))/R)^(1/(1 + k))`);
        const result = (-S + Math.pow((Math.pow(S, 1 + k) * (R + dR)) / R, 1 / (1 + k))) *
          (1 - asDecimal(targetRoyaltiesPercent));
        //console.log(`Result: ${result}`);
        return result;
      } else if (this.c == 0) {
        //console.log(`c is 0, using formula: S dR / R`);
        const result = ((S * dR) / R) * (1 - asDecimal(targetRoyaltiesPercent));
        //console.log(`Result: ${result}`);
        return result;
      } else {
        //console.log(`Error: Both b and k are defined on an exponential curve`);
        throw new Error(
          "Cannot convert base amount to target amount when both b and k are defined on an exponential curve. The math is too hard"
        );
      }
    }
  }
}

export class ExponentialCurve extends BaseExponentialCurve {
  b: number;
  _k: number;
  pow: number;
  frac: number;

  k(_: number = now()) {
    return this._k;
  }

  constructor(
    curve: ExponentialCurveV0,
    baseAmount: number,
    targetSupply: number,
    goLiveUnixTime: number = now()
  ) {
    super(
      +curve.c.toString() / 1000000000000,
      baseAmount,
      targetSupply,
      goLiveUnixTime
    );
    this.b = +curve.b.toString() / 1000000000000;
    this._k = curve.pow / curve.frac;
    this.pow = curve.pow;
    this.frac = curve.frac;

    this.baseAmount = baseAmount;
    this.targetSupply = targetSupply;
  }
}

export class TimeDecayExponentialCurve extends BaseExponentialCurve {
  b: number = 0;
  k0: number;
  k1: number;
  d: number;
  interval: number;

  k(timeElapsed: number): number {
    const ret =
      this.k0 -
      (this.k0 - this.k1) *
        Math.min(Math.pow(timeElapsed / this.interval, this.d), 1);
    return ret;
  }

  constructor(
    curve: TimeDecayExponentialCurveV0,
    baseAmount: number,
    targetSupply: number,
    goLiveUnixTime: number
  ) {
    super(
      +curve.c.toString() / 1000000000000,
      baseAmount,
      targetSupply,
      goLiveUnixTime
    );
    this.k1 = +curve.k1.toString() / 1000000000000;
    this.k0 = +curve.k0.toString() / 1000000000000;
    this.d = +curve.d.toString() / 1000000000000;
    this.interval = curve.interval;

    this.baseAmount = baseAmount;
    this.targetSupply = targetSupply;
  }
}
