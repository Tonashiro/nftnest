import { useMetamaskState } from "@context/MetamaskContext";
import { MyNFTSPage } from "@organisms/MyNFTSPage";
import Head from "next/head";

export default function MyNFTS() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | My NFTs</title>
      </Head>
      {currentAccount ? <MyNFTSPage /> : <h1>Connect Wallet</h1>}
    </>
  );
}
