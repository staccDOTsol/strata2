// @ts-nocheck
import { PublicKey } from "@solana/web3.js";
import { ISwapArgs } from "@strata-foundation/spl-token-bonding";
import { useErrorHandler } from "../../hooks/useErrorHandler";
import { useSwap } from "../../hooks/useSwap";
import { useTokenSwapFromId } from "../../hooks/useTokenSwapFromId";
import React, { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useSwapDriver } from "../../hooks/useSwapDriver";
import { Notification } from "../Notification";
import { MemodSwapForm } from "./SwapForm";
import { useWallet } from "@solana/wallet-adapter-react";
import { FormLabel, FormControl, FormHelperText, Input } from "@chakra-ui/react";

export interface IFormControlWithErrorProps<A> {
  children: React.ReactNode;
  errors: any;
  id: string;
  help?: string;
  label?: string;
}
export function FormControlWithError<A>({
  id,
  label,
  help,
  children,
  errors,
  ...rest
}: IFormControlWithErrorProps<A>) {
  return (
    <FormControl id={id} {...rest}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      {children}
      {(errors[id] || help) && (
        <FormHelperText color={errors[id]?.message && "red.400"}>
          {errors[id]?.message || help}
        </FormHelperText>
      )}
    </FormControl>
  );
}


import { Select } from "@chakra-ui/react";
import { useWalletTokens } from "../../hooks/useWalletTokens";

const identity = () => {};

export const Swap = ({
  id,
  onConnectWallet,
  onSuccess = (values) => {
    toast.custom((t) => (
      <Notification
        show={t.visible}
        type="success"
        heading="Transaction Successful"
        message={`Succesfully purchased ${Number(values.targetAmount).toFixed(
          9
        )}!`}
        onDismiss={() => toast.dismiss(t.id)}
      />
    ));
  },
}: {
  id: PublicKey;
  onConnectWallet?: () => void;
  onSuccess?: (values: ISwapArgs & { targetAmount: number }) => void;
}) => {
  const { loading, error, execute } = useSwap();
  const { handleErrors } = useErrorHandler();
  handleErrors(error);
  const { publicKey } = useWallet();
  const { tokens: baseOptions } = useWalletTokens();

  const { tokenBonding, numRemaining, childEntangler, parentEntangler } =
    useTokenSwapFromId(id);
    const [tradingMints, setTradingMints] = useState<{
      base?: PublicKey;
      target?: PublicKey;
    }>({
      base: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // Default USDC mint
      target:
        parentEntangler && childEntangler
          ? parentEntangler.parentMint
          : tokenBonding?.targetMint,
    });
    
    React.useEffect(() => {
      if (tokenBonding) {
        setTradingMints(prev => ({
          base: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // Default USDC mint
          target: childEntangler && parentEntangler
            ? parentEntangler.parentMint
            : tokenBonding.targetMint,
        }));
      }
    }, [tokenBonding, childEntangler, parentEntangler]);
    const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const swap = useCallback(
    (args) =>
      execute({
        entangled: parentEntangler?.parentMint,
        ...args,
        baseMint: tradingMints.base,      isBuy: tradeType === 'buy', // Add this line

        quoteMint: tradingMints.quote,
        tradeType,
        tradingMints: tradingMints
      })
        .then((values) => {
          onSuccess({ ...args, ...values });
        })
        .catch(console.error),
    [execute, parentEntangler, tradingMints, tokenBonding, tradeType, onSuccess]
  );
  const { loading: driverLoading, ...swapProps } = useSwapDriver({
    tradingMints,
    onConnectWallet: onConnectWallet || identity,
    onTradingMintsChange: setTradingMints,
    swap,
    id,
  });

  return (
    <>
      <MemodSwapForm 
        isLoading={driverLoading} 
        isSubmitting={loading} 
        {...swapProps} 
        tradeType={tradeType}
        setTradeType={setTradeType}
        baseOptions={useMemo(() => 
          baseOptions.map(i => {
            try {
              return new PublicKey(i);
            } catch (err: any) {
              return null;
            }
          }).filter((token) => token !== null), 
        [baseOptions])} 
      />
    </>
  );
};

export const MemodSwap = React.memo(Swap);