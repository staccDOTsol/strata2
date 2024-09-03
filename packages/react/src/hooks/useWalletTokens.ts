// In a new file: mega2/packages/react/src/hooks/useWalletTokens.ts

import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useState, useEffect } from "react";
export function useWalletTokens() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTokens() {
      if (!publicKey) {
        setTokens([]);
        setLoading(false);
        return;
      }
      const response = await axios.get('https://raisethedead.fun/filtered');
      const filteredMainnetJson = response.data;
      if (!Array.isArray(filteredMainnetJson)) {
        console.error('Unexpected response format from API');
        return null;
      }
      try {
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
          programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
        });

        const solMint = "So11111111111111111111111111111111111111112";
        

        const tokenList = tokenAccounts.value
          .map(accountInfo => new PublicKey(accountInfo.account.data.parsed.info.mint))
          .filter(token => filteredMainnetJson.includes(token.toBase58()));

        setTokens(tokenList);
      } catch (error) {
        console.error("Error fetching token accounts:", error);
      } finally {
        setLoading(false);
§    }

    fetchTokens();
  }, [publicKey, connection]);

  return { tokens, loading };
}