import { Input } from "@atoms/Input";
import { InputState } from "@atoms/Input/types";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import React, { useState } from "react";
import { Button } from "@atoms/Button";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { notification } from "@utils/notification";
import { useMetamaskState } from "@context/MetamaskContext";
import axios from "axios";

const MintNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mintInfo, setMintInfo] = useState<any>({
    mint_nft_metadata: "",
    mint_contract_id: "",
    mint_to: "",
  });

  const mintNFT = async () => {
    setIsLoading(true);
    const url = "https://api.nftport.xyz/v0/mints/customizable";

    const options = {
      method: "POST",
      url,
      headers: {
        Authorization: process.env.NEXT_PUBLIC_NFTPORT_API_KEY,
        "Content-Type": "application/json",
      },
      data: {
        chain: "goerli",
        contract_address: mintInfo.mint_contract_id,
        metadata_uri: mintInfo.mint_nft_metadata,
        mint_to_address: mintInfo.mint_to,
      },
    };

    await axios
      .request(options)
      .then((response) => {
        console.log("NFT Minted!", response.data);
        notification("NFT Minted!", "success", response?.data.transaction_external_url);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        notification("Minting Failed!", "danger", error.toString());
        setIsLoading(false);
      });
  };

  return (
    <>
      <ReactNotifications />
      <PageWrapper>
        <InputWrapper>
          <Input
            name="mint_nft_metadata"
            placeholder="Insira o metadata da NFT"
            setter={setMintInfo}
          />
          <Input
            name="mint_contract_id"
            placeholder="Insira o contrato referente a NFT que será feito o mint"
            setter={setMintInfo}
          />
          <Input name="mint_to" placeholder="Insira o endereço da carteira que receberá a NFT" setter={setMintInfo} />
          {isLoading ? (
            <Button disabled style={{ width: "fit-content" }}>
              <ReactLoading type="spinningBubbles" height="30px" width={40} />
            </Button>
          ) : (
            <Button onClick={mintNFT}>Mint NFT</Button>
          )}
        </InputWrapper>
      </PageWrapper>
    </>
  );
};

export { MintNFTPage };
