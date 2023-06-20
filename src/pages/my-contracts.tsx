import { MyContractsPage } from "@organisms/MyContractsPage";
import { useMetamaskState } from "@context/MetamaskContext";
import Head from "next/head";
import { Unauthenticated } from "@styles/ GlobalStyle";

export default function MyContracts() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Create Contract</title>
      </Head>
      {currentAccount ? <MyContractsPage /> : <Unauthenticated>Connect Your Wallet</Unauthenticated>}
    </>
  );
}
