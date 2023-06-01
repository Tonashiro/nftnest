import { useMetamaskState } from "@context/MetamaskContext";
import { TransferNFTPage } from "@organisms/TransferNFTPage";
import Head from "next/head";

export default function TransferNFT() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Transfer NFT</title>
      </Head>
      {currentAccount ? <TransferNFTPage /> : <h1>Connect Wallet</h1>}
    </>
  );
}
