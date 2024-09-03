import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  VStack
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import {
  useBondingPricing,
  useOwnedAmount,
  useStrataSdks,
  useTokenBondingFromMint,
  useTokenMetadata
} from "@strata-foundation/react";
import React, { useMemo, useState } from "react";
import { AsyncButton } from "..";

export const BountyContribute = ({
  mintKey,
  onContributeSuccess,
  onBuyMore,
}: {
  mintKey: PublicKey | undefined;
  onContributeSuccess: () => void;
  onBuyMore?: (baseMint: PublicKey) => void;
}) => {
  const [qty, setQty] = useState("");
  const { connected } = useWallet();
  const { info: tokenBonding, loading: bondingLoading } =
    useTokenBondingFromMint(mintKey);
  const { tokenBondingSdk } = useStrataSdks();
  const [isWithdraw, setIsWithdraw] = useState(false);
  const { pricing } = useBondingPricing(tokenBonding?.publicKey);
  const { metadata: baseMetadata } = useTokenMetadata(tokenBonding?.baseMint);
  const targetBalance = useOwnedAmount(tokenBonding?.targetMint);

  const baseBalance = useOwnedAmount(tokenBonding?.baseMint);
  const disabledText = undefined

  const isDisabled = !!disabledText;

  return (
    <VStack w="full" justify="stretch" spacing={2}>
      {baseMetadata && onBuyMore && (
        <Button
          variant="link"
          size="sm"
          marginLeft="auto"
          onClick={() => onBuyMore(tokenBonding!.baseMint)}
        >
          Buy More {baseMetadata.data.symbol}{" "}
        </Button>
      )}
      <InputGroup>
        <Input
          type="number"
          value={qty}
          onChange={(e) => {
            setQty(e.target.value);
          }}
        />
        <InputRightElement
          pr={"6px"}
          fontSize="16px"
          fontWeight={700}
          color="gray.500"
          justifyContent="flex-end"
          width="120px"
        >
          {baseMetadata?.data.symbol}
        </InputRightElement>
      </InputGroup>
      <HStack justify="stretch" w="full">
        <Button
          flexGrow={1}
          onClick={() => setIsWithdraw(!isWithdraw)}
          fontWeight={400}
          variant="outline"
          colorScheme="primary"
        >
          {isWithdraw ? "Contribute Funds" : "Withdraw Funds"}
        </Button>
        <AsyncButton
          flexGrow={1}
          colorScheme="primary"
          action={async () => {
            const quantity = Number(qty);
            if (isWithdraw && pricing) {
              await tokenBondingSdk?.sell({
                baseMint: tokenBonding?.baseMint,

                targetAmount: -(await pricing.buyWithBaseAmount(-quantity)),
                tokenBonding: tokenBonding?.publicKey!,
                slippage: 0,
              });
            } else if (!isWithdraw) {
              await tokenBondingSdk?.buy({
                baseMint: PublicKey.default,

                baseAmount: quantity,
                tokenBonding: tokenBonding?.publicKey!,
                slippage: 0,
              });
            }

            onContributeSuccess();
          }}
          isDisabled={isDisabled}
        >
          {isDisabled
            ? disabledText
            : isWithdraw
            ? "Widthdraw Funds"
            : "Contribute Funds"}
        </AsyncButton>
      </HStack>
    </VStack>
  );
};
