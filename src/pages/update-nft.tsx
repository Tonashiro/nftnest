import { useMetamaskState } from "@context/MetamaskContext";
import { UpdateNFTPage } from "@organisms/UpdateNFTPage";
import Head from "next/head";

export default function UpdateNFT() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Update NFT</title>
      </Head>
      {currentAccount ? <UpdateNFTPage /> : <h1>Connect Wallet</h1>}
    </>
  );
}
