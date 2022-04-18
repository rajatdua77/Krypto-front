import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ethers } from "ethers";

import { contractAddress, walletAbi } from "./constant";

const WalletContext = React.createContext(null);

export const useWallet = () => React.useContext(WalletContext);

export const WalletProvider = (props) => {
  const { children } = props;

  const [isMetamaskInstalled, setMetamaskInstalled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [walletBalance, setWalletBalance] = useState(null);

  const createEthContract = useMemo(() => {
    if (isMetamaskInstalled) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const transactionsContract = new ethers.Contract(
        contractAddress,
        walletAbi,
        signer
      );
      return transactionsContract;
    }
  }, [isMetamaskInstalled]);

  const fetchCurrentWalletBalance = useCallback(async () => {
    if (isMetamaskInstalled && accounts.length > 0) {
      const balance = await createEthContract?.getBalance();
      setWalletBalance(parseInt(balance._hex) / 10 ** 18);
    }
  }, [accounts.length, createEthContract, isMetamaskInstalled]);

  const transfer = useCallback(
    async (to, amount, transferType) => {
      if (isMetamaskInstalled) {
        switch (transferType) {
          case "direct":
            {
              const result = await createEthContract?.transferDirect(
                to,
                ethers.utils.parseEther(amount.toString()),
                {
                  from: accounts[0],
                  gasLimit: 6721975,
                  gasPrice: 20000000000,
                }
              );
              console.log("Transfer Result", result);
            }
            break;
          case "wallet":
            {
              const result = await createEthContract?.transferToWallet(
                to,
                ethers.utils.parseEther(amount.toString()),
                {
                  from: accounts[0],
                  gasLimit: 6721975,
                  gasPrice: 20000000000,
                }
              );
              console.log("Transfer Result", result);
            }
            break;
          default: {
            console.log("Invalid Case");
          }
        }
      }
    },
    [accounts, createEthContract, isMetamaskInstalled]
  );

  const depositToWallet = useCallback(
    async (amount) => {
      if (isMetamaskInstalled) {
        const result = await createEthContract?.depositToWallet({
          from: accounts[0],
          value: ethers.utils.parseEther(amount.toString()),
          gasLimit: 6721975,
          gasPrice: 20000000000,
        });
        console.log("depositToWallet", result);
      }
    },
    [accounts, createEthContract, isMetamaskInstalled]
  );

  const fetchAccounts = useCallback(async () => {
    if (isMetamaskInstalled) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccounts(accounts);
    } else {
      setAccounts([]);
    }
  }, [isMetamaskInstalled]);

  useEffect(() => {
    setMetamaskInstalled("ethereum" in window);
  }, []);

  useEffect(() => {
    if (isMetamaskInstalled) {
      fetchAccounts();
      fetchCurrentWalletBalance();
    }
  }, [fetchAccounts, fetchCurrentWalletBalance, isMetamaskInstalled]);

  console.log("isMetamaskInstalled", isMetamaskInstalled);
  console.log("accounts", accounts);
  console.log("balance", walletBalance);

  return (
    <WalletContext.Provider
      value={{
        accounts,
        isMetamaskInstalled,
        fetchAccounts,
        walletBalance,
        fetchCurrentWalletBalance,
        depositToWallet,
        transfer,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
