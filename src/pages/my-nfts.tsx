import { useMetamaskState } from "@context/MetamaskContext";
import { MyNFTSPage } from "@organisms/MyNFTSPage";
import { Unauthenticated } from "@styles/ GlobalStyle";
import Head from "next/head";

export default function MyNFTS() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | My NFTs</title>
      </Head>
      {currentAccount ? <MyNFTSPage /> : <Unauthenticated>Connect Your Wallet</Unauthenticated>}
    </>
  );
}
