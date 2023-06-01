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
import axios from "axios";

const UploadNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const AUTHORIZATION = process.env.NEXT_PUBLIC_NFTPORT_API_KEY;
  const [nftInfo, setNftInfo] = useState<any>({
    nft_name: "",
    nft_description: "",
    file_url: "",
  });

  const uploadMetaData = async (file_url: any) => {
    const options = {
      method: "POST",
      url: "https://api.nftport.xyz/v0/metadata",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTHORIZATION,
      },
      data: {
        name: nftInfo.nft_name,
        description: nftInfo.nft_description,
        file_url,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        notification("NFT Metadata Created!", "success", response?.data.metadata_uri);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.error(error);
        notification("NFT Metadata Creation Failed!", "danger", error.toString());
      });
  };

  const uploadToIPFS = async () => {
    setIsLoading(true);
    const form = new FormData();
    form.append("file", nftInfo.file_url);
    const requestParams = {
      method: "POST",
      url: "https://api.nftport.xyz/v0/files",
      body: form,
      headers: {
        Authorization: AUTHORIZATION,
        "Content-Type": "multipart/form-data",
        "content-type": "multipart/form-data; boundary=---011000010111000001101001",
      },
    };
    let ipfs_url = "";
    await axios
      .post(requestParams.url, form, {
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        ipfs_url = response.data.ipfs_url;
      })
      .catch((error) => console.log(error));

    uploadMetaData(ipfs_url);
  };

  return (
    <>
      <ReactNotifications />
      <PageWrapper>
        <InputWrapper>
          <Input name="nft_name" placeholder="Digite o nome do NFT" setter={setNftInfo} />
          <Input name="nft_description" placeholder="Digite a descrição do NFT" setter={setNftInfo} />
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
