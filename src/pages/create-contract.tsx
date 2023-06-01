import { CreateContractPage } from "@organisms/CreateContractPage";
import { useMetamaskState } from "@context/MetamaskContext";
import Head from "next/head";

export default function CreateContract() {
  const { currentAccount } = useMetamaskState();

  return (
    <>
      <Head>
        <title>NFTNest | Create Contract</title>
      </Head>
      {currentAccount ? <CreateContractPage userWallet={currentAccount as string} /> : <h1>Connect Wallet</h1>}
    </>
  );
}
