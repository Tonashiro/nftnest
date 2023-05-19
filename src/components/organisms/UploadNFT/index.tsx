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

const UploadNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nftInfo, setNftInfo] = useState<InputState>({
    name: "",
    description: "",
    file_url: "",
  });

  const uploadToIPFS = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      notification(`NFT Succesfully Uploaded`, "success", "NFT uploaded to ipfs hash...");
    }, 3000);
  };

  return (
    <>
      <ReactNotifications />
      <PageWrapper>
        <InputWrapper>
          <Input name="name" placeholder="Digite o nome do NFT" setter={setNftInfo} />
          <Input name="description" placeholder="Digite a descrição do NFT" setter={setNftInfo} />
          <FileSelector info={nftInfo} setter={setNftInfo} />

          {isLoading ? (
            <Button disabled>
              <ReactLoading type="spinningBubbles" height="30px" width={40} />
            </Button>
          ) : (
            <Button onClick={uploadToIPFS}>Upload NFT</Button>
          )}
        </InputWrapper>
      </PageWrapper>
    </>
  );
};

export { UploadNFTPage };
