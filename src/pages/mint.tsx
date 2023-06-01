import { useMetamaskState } from "@context/MetamaskContext";
import { MintNFTPage } from "@organisms/MintNFTPage";
import Head from "next/head";

export default function MintNFT() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Mint NFT</title>
      </Head>
      {currentAccount ? <MintNFTPage /> : <h1>Connect Wallet</h1>}
    </>
  );
}
