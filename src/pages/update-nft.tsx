import { useMetamaskState } from "@context/MetamaskContext";
import { UpdateNFTPage } from "@organisms/UpdateNFTPage";
import { Unauthenticated } from "@styles/ GlobalStyle";
import Head from "next/head";

export default function UpdateNFT() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Update NFT</title>
      </Head>
      {currentAccount ? <UpdateNFTPage /> : <Unauthenticated>Connect Your Wallet</Unauthenticated>}
    </>
  );
}
