import { useMetamaskState } from "@context/MetamaskContext";
import { TransferNFTPage } from "@organisms/TransferNFTPage";
import { Unauthenticated } from "@styles/ GlobalStyle";
import Head from "next/head";

export default function TransferNFT() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Transfer NFT</title>
      </Head>
      {currentAccount ? <TransferNFTPage /> : <Unauthenticated>Connect Your Wallet</Unauthenticated>}
    </>
  );
}
