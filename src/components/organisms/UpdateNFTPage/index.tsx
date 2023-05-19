import React, { useState } from "react";
import { Input } from "@atoms/Input";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import { Button } from "@atoms/Button";
import { InputState } from "@atoms/Input/types";
import { FileSelector } from "@atoms/FileSelector";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { notification } from "@utils/notification";

const UpdateNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<InputState>({
    update_contract: "",
    update_nft: "",
    update_name: "",
    update_description: "",
    update_file_url: "",
  });

  const uploadToIPFS = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      notification(`NFT Succesfully Updated`, "success", "NFT updated UID...");
    }, 3000);
  };

  return (
    <>
      <ReactNotifications />
      <PageWrapper>
        <InputWrapper>
          <Input name="update_contract" placeholder="Digite o endereço do contrato" setter={setUpdateInfo} />
          <Input name="update_nft_uid" placeholder="Digite o UID da NFT" setter={setUpdateInfo} />
          <Input name="update_name" placeholder="Digite o nome do NFT" setter={setUpdateInfo} />
          <Input name="update_description" placeholder="Digite a descrição do NFT" setter={setUpdateInfo} />
          <FileSelector info={updateInfo} setter={setUpdateInfo} />

          {isLoading ? (
            <Button disabled style={{ width: "fit-content" }}>
              <ReactLoading type="spinningBubbles" height="30px" width={40} />
            </Button>
          ) : (
            <Button onClick={uploadToIPFS}>Update NFT</Button>
          )}
        </InputWrapper>
      </PageWrapper>
    </>
  );
};

export { UpdateNFTPage };
