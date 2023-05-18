import React, { useState } from "react";
import { Input } from "@atoms/Input";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import { Button } from "@atoms/Button";
import { InputState } from "@atoms/Input/types";

const UploadNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nftInfo, setNFftInfo] = useState<InputState>({
    name: "",
    description: "",
    file_url: "",
  });

  const handleFileInputChange = async (e: any) => {
    const currentIMG = e.target.files[0];

    const myPromisse = new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(currentIMG);
      reader.onload = () => {
        resolve(reader.result);
      };
    });

    await myPromisse;

    setNFftInfo({ ...nftInfo, file_url: currentIMG });
  };

  const uploadToIPFS = async () => {};

  return (
    <PageWrapper>
      <InputWrapper>
        <Input name="name" placeholder="Digite o nome do NFT" setter={setNFftInfo} />
        <Input name="description" placeholder="Digite a descrição do NFT" setter={setNFftInfo} />
        <input type="file" name="file" onChange={handleFileInputChange} />

        {isLoading ? (
          <Button disabled style={{width: "fit-content"}}>
            <ReactLoading type="spinningBubbles" height="auto" width={40} />
          </Button>
        ) : (
          <Button onClick={uploadToIPFS}>Upload NFT</Button>
        )}
      </InputWrapper>
    </PageWrapper>
  );
};

export { UploadNFTPage };
