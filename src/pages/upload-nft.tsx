import { useMetamaskState } from "@context/MetamaskContext";
import { UploadNFTPage } from "@organisms/UploadNFT";
import Head from "next/head";

export default function UploadNFT() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Upload NFT</title>
      </Head>
      {currentAccount ? <UploadNFTPage /> : <h1>Connect Wallet</h1>}
    </>
  );
}
