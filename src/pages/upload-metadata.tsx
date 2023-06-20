import { useMetamaskState } from "@context/MetamaskContext";
import { UploadMetadataPage } from "@organisms/UploadMetadata";
import { Unauthenticated } from "@styles/ GlobalStyle";
import Head from "next/head";

export default function UploadMetadata() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Upload NFT</title>
      </Head>
      {currentAccount ? <UploadMetadataPage /> : <Unauthenticated>Connect Your Wallet</Unauthenticated>}
    </>
  );
}
