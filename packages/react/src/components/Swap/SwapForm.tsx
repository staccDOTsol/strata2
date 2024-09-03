import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  ScaleFade,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useConnection } from "@solana/wallet-adapter-react";

import { yupResolver } from "@hookform/resolvers/yup";
import { NATIVE_MINT, TOKEN_PROGRAM_ID, MintLayout } from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Keypair } from "@solana/web3.js";
import {
  BondingHierarchy,
  BondingPricing,
  SplTokenBonding,
} from "@strata-foundation/spl-token-bonding";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsChevronDown } from "react-icons/bs";
import { RiArrowUpDownFill, RiInformationLine } from "react-icons/ri";
import * as yup from "yup";
import { useFtxPayLink } from "../../hooks/useFtxPayLink";
import { useMint } from "../../hooks/useMint";
import { useProvider } from "../../hooks/useProvider";
import { useSolanaUnixTime } from "../../hooks/useSolanaUnixTime";
import { useTokenSwapFromId } from "../../hooks/useTokenSwapFromId";
import { useTwWrappedSolMint } from "../../hooks/useTwWrappedSolMint";
import { useTokenMetadata } from "../../hooks/useTokenMetadata";
import { Tweet } from 'react-twitter-widgets';
import { SimpleGrid, Heading } from "@chakra-ui/react";

import { roundToDecimals } from "../../utils/roundToDecimals";
import { Spinner } from "../Spinner";
import { Royalties } from "./Royalties";
import { TransactionInfo, TransactionInfoArgs } from "./TransactionInfo";
import { useTokenBonding } from "../../hooks/useTokenBonding";
import { Program, AnchorProvider, Wallet } from "@coral-xyz/anchor";

export interface ISwapFormValues {
  topAmount: number;
  bottomAmount: number;
  slippage: number;
  lastSet: "bottom" | "top";
  isBuy: boolean;
}

const validationSchema = yup
  .object({
    topAmount: yup.number().required().moreThan(0),
  })
  .required();

export interface ISwapFormProps {
  isLoading?: boolean;
  isSubmitting: boolean;
  isBuying: boolean;
  onConnectWallet: () => void;
  onTradingMintsChange: (args: { base: PublicKey; target: PublicKey }) => void;
  onBuyBase?: (tokenBonding: PublicKey) => void;
  onSubmit: (values: ISwapFormValues) => Promise<void>;
  goLiveDate: Date | undefined;
  id: PublicKey | undefined;
  pricing: BondingPricing | undefined;
  baseOptions: PublicKey[];
  targetOptions: PublicKey[];
  base:
    | {
        name: string;
        ticker: string;
        image: string | undefined;
        publicKey: PublicKey;
      }
    | undefined;
  target:
    | {
        name: string;
        ticker: string;
        image: string | undefined;
        publicKey: PublicKey;
      }
    | undefined;
  ownedBase: number | undefined;
  spendCap: number;
  mintCap?: number;
  numRemaining?: number;
  feeAmount?: number;
  showAttribution?: boolean;
  extraTransactionInfo?: Omit<TransactionInfoArgs, "formRef">[];
  swapBaseWithTargetEnabled?: boolean;
  tradeType?: 'buy' | 'sell';
  setTradeType: React.Dispatch<React.SetStateAction<'buy' | 'sell'>>;
}

function MintMenuItem({
  mint,
  onClick,
}: {
  mint: PublicKey;
  onClick: () => void;
}) {
  const { image, metadata } = useTokenMetadata(mint);

  return (
    <MenuItem
      onClick={onClick}
      icon={
        <Center w={8} h={8} rounded="full">
          <Avatar w={"100%"} h={"100%"} size="sm" src={image} />
        </Center>
      }
    >
      <Text>{metadata?.data.symbol}</Text>
    </MenuItem>
  );
}
export const SwapForm = ({
  isLoading = false,
  isSubmitting,
  onConnectWallet,
  onTradingMintsChange,
  onSubmit,
  id,
  pricing,
  base,
  target,
  ownedBase,
  tradeType,
  setTradeType,
  spendCap,
  baseOptions,
  targetOptions,
}: ISwapFormProps) => {
  const formRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { connected } = useWallet();
  const { awaitingApproval } = useProvider();
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = [
    "Explore THINK",
    "Learn THINK",
    "Discover THINK",
    "Understand THINK",
    "Consider THINK",
    "THINK basics",
    "About THINK",
    "THINK overview",
    "THINK explained",
    "THINK info",
    "THINK details",
    "THINK introduction",
    "THINK fundamentals",
    "Dive into THINK",
    "THINK essentials",
    "THINK insights",
    "THINK concepts",
    "THINK principles",
    "Grasp THINK",
    "THINK knowledge"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const tagline = taglines[taglineIndex];


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ISwapFormValues>({
    defaultValues: {
      topAmount: undefined,
      slippage: 80,
    },
  });

  const topAmount = watch("topAmount");

  const handleConnectWallet = () => onConnectWallet();

  const handleUseMax = () => {
    const amount = (ownedBase || 0) >= spendCap ? spendCap : ownedBase || 0;
    setValue("topAmount", amount);
  };
  const handleSwap = async (values: ISwapFormValues) => {
    await onSubmit({ ...values, lastSet: "top", isBuy: tradeType === 'buy' });
  };
  const { connection } = useConnection();
  const [baseTokenInfos, setBaseTokenInfos] = useState<{ [key: string]: any }>({});
  
  useEffect(() => {
    const fetchTokenInfos = async () => {
      if (baseOptions && baseOptions.length > 0) {
        try {
          const accountInfos = await connection.getMultipleAccountsInfo(baseOptions);
          const parsedInfos = accountInfos.reduce((acc, info, index) => {
            if (info) {
              const parsedData = MintLayout.decode(info.data);
              acc[baseOptions[index].toBase58()] = parsedData;
            }
            return acc;
          }, {} as { [key: string]: any });
          setBaseTokenInfos(parsedInfos);
        } catch (error) {
          console.error("Error fetching token infos:", error);
        }
      }
    };
    fetchTokenInfos();
  }, [baseOptions, connection, topAmount, tradeType]);


  if (isLoading || !base || !target || !baseOptions) {
    return <Spinner />;
  }
  return (
    <>
    <Box ref={formRef} w="full" color="gray.200">
      <form onSubmit={handleSubmit(handleSwap)}>
        <VStack spacing={4} align="stretch">
          <Center>
            <Text fontSize="2xl" fontWeight="bold">THINK</Text>
          </Center>

          <HStack spacing={4}>
            <Button
              onClick={() => setTradeType('buy')}
              variant={tradeType === 'buy' ? 'solid' : 'outline'}
              colorScheme="orange"
              flex={1}
            >
              Buy
            </Button>
            <Button
              onClick={() => setTradeType('sell')}
              variant={tradeType === 'sell' ? 'solid' : 'outline'}
              colorScheme="orange"
              flex={1}
            >
              Sell
            </Button>
          </HStack>

          <VStack spacing={1} align="left">
            <Text fontSize="xs">{tradeType === 'buy' ? 'You Pay' : 'You Sell'}</Text>
            <InputGroup size="lg">
              <Input
                isInvalid={!!errors.topAmount}
                id="topAmount"
                placeholder="0"
                type="number"
                step="any"
                {...register("topAmount", {
                  valueAsNumber: true,
                  validate: (value) => value > 0 || "Amount must be greater than 0"
                })}
                borderRadius="xl"
                borderColor="gray.600"
                borderWidth="2px"
                bg="gray.800"
                color="white"
                fontSize="xl"
                fontWeight="bold"
                _hover={{ borderColor: "gray.500" }}
                _focus={{ borderColor: "orange.500", boxShadow: "0 0 0 1px orange.500" }}
                _placeholder={{ color: "gray.500" }}
              />
               <InputRightElement width="4.5rem">
            <Menu>
              <MenuButton 
                as={Button} 
                rightIcon={<BsChevronDown />}
                bg="white"
                color="gray.800"
                fontWeight="bold"
                borderRadius="xl"
                _hover={{ bg: "gray.100" }}
                _active={{ bg: "gray.200" }}
              >
                {base.ticker}
              </MenuButton>
              <MenuList bg="white" borderColor="gray.200">
                {baseOptions.map((mint) => (
                  <MintMenuItem
                    key={mint.toBase58()}
                    mint={mint}
                    onClick={() => onTradingMintsChange({ base: mint, target: target.publicKey })}
                  />
                ))}
              </MenuList>
            </Menu>
          </InputRightElement>
        </InputGroup>
          </VStack>

          {connected && tradeType === 'buy' && (
            <Button
              size="xs"
              variant="ghost"
              colorScheme="orange"
              onClick={handleUseMax}
            >
              Use Max ({ownedBase || 0} {base.ticker})
            </Button>
          )}

         

          <Button
            type="submit"
            colorScheme="orange"
            size="lg"
            isLoading={isSubmitting || awaitingApproval}
            loadingText={awaitingApproval ? "Awaiting Approval" : "Submitting"}
          >
            {connected ? tradeType === 'buy' ? 'Buy $THINK' : 'Sell $THINK' : 'Connect Wallet'}
          </Button>       

        </VStack>
      </form>
    </Box>
    <Box mt={12}>
        <Heading as="h3" size="lg" mb={4}>{tagline}</Heading>
          <Tweet
            tweetId="1830706800120996216"
            options={{
              theme: "dark",
              width: "100%",
              align: "center"
            }}
            onLoad={() => console.log(`Tweet 1830706800120996216 has loaded!`)}
          />
      </Box>
    </>
  )
}
export const MemodSwapForm = React.memo(SwapForm);

function getStep(arg0: number): string {
return arg0 == 0 ? "1" : "0." + "0".repeat(Math.abs(arg0) - 1) + "1";
}