import React, { useState } from "react";
import { Input } from "@atoms/Input";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import { Button } from "@atoms/Button";
import { InputState } from "@atoms/Input/types";

const UpdateNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<InputState>({
    update_name: "",
    update_description: "",
    update_file_url: "",
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

    setUpdateInfo({ ...updateInfo, file_url: currentIMG });
  };

  const uploadToIPFS = async () => {};

  return (
    <PageWrapper>
      <InputWrapper>
        <Input name="update_name" placeholder="Digite o nome do NFT" setter={setUpdateInfo} />
        <Input name="update_description" placeholder="Digite a descrição do NFT" setter={setUpdateInfo} />
        <input type="file" name="update_file" onChange={handleFileInputChange} />

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

export { UpdateNFTPage };
