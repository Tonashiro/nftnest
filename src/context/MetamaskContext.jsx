import React, { useEffect, useState, useContext } from "react";

export const MetamaskContext = React.createContext();
if (typeof window !== "undefined") {
  const { ethereum } = window;
}

export const MetamaskProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, [currentAccount]);

  return (
    <MetamaskContext.Provider
      value={{
        connectWallet,
        currentAccount,
      }}>
      {children}
    </MetamaskContext.Provider>
  );
};

export function useMetamaskState() {
  return useContext(MetamaskContext);
}
