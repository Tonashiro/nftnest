import React, { useState } from "react";
import { Input } from "@atoms/Input";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import { Button } from "@atoms/Button";
import { InputState } from "@atoms/Input/types";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { notification } from "@utils/notification";
import axios from "axios";

const UpdateNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<any>({
    update_contract: "",
    update_nft: "",
    update_metadata: "",
  });

  const updateMetaData = async () => {
    setIsLoading(true);
    await axios
      .put(
        "https://api.nftport.xyz/v0/mints/customizable",
        {
          chain: "goerli",
          contract_address: updateInfo.update_contract,
          token_id: updateInfo.update_nft,
          metadata_uri: updateInfo.update_metadata,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.NEXT_PUBLIC_NFTPORT_API_KEY,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        notification("Metadata Changed!", "success", response?.data.transaction_external_url);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        notification("Metadata Update Failed!", "danger", error.toString());
        setIsLoading(false);
      });
  };

  return (
    <>
      <ReactNotifications />
      <PageWrapper>
        <InputWrapper>
          <Input name="update_contract" placeholder="Digite o endereço do contrato" setter={setUpdateInfo} />
          <Input name="update_nft" placeholder="Digite o UID da NFT" setter={setUpdateInfo} />
          <Input name="update_metadata" placeholder="Insira o novo metadata da NFT" setter={setUpdateInfo} />

          {isLoading ? (
            <Button disabled style={{ width: "fit-content" }}>
              <ReactLoading type="spinningBubbles" height="30px" width={40} />
            </Button>
          ) : (
            <Button onClick={updateMetaData}>Update NFT</Button>
          )}
        </InputWrapper>
      </PageWrapper>
    </>
  );
};

export { UpdateNFTPage };
