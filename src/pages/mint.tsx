import { useMetamaskState } from "@context/MetamaskContext";
import { MintNFTPage } from "@organisms/MintNFTPage";
import { Unauthenticated } from "@styles/ GlobalStyle";
import Head from "next/head";

export default function MintNFT() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Mint NFT</title>
      </Head>
      {currentAccount ? <MintNFTPage /> : <Unauthenticated>Connect Your Wallet</Unauthenticated>}
    </>
  );
}
