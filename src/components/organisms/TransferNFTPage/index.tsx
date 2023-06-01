import { Input } from "@atoms/Input";
import ReactLoading from "react-loading";
import { InputState } from "@atoms/Input/types";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import React, { useState } from "react";
import { Button } from "@atoms/Button";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { notification } from "@utils/notification";
import axios from "axios";

const TransferNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transferInfo, setTransferInfo] = useState<any>({
    nft_uid: "",
    contract_id: "",
    transfer_to: "",
  });

  const transferNFT = async () => {
    setIsLoading(true);
    const url = `https://api.nftport.xyz/v0/mints/transfers`;

    await axios
      .post(
        url,
        {
          chain: "goerli",
          contract_address: transferInfo.contract_id,
          token_id: transferInfo.nft_uid,
          transfer_to_address: transferInfo.transfer_to,
        },
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_NFTPORT_API_KEY,
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        notification("NFT Transfered!", "success", response?.data.transaction_external_url);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        notification("Transfer Failed!", "danger", error.toString());
        setIsLoading(false);
      });
  };

  return (
    <>
      <ReactNotifications />
      <PageWrapper>
        <InputWrapper>
          <Input name="nft_uid" placeholder="Insira o UID do NFT que deseja transferir" setter={setTransferInfo} />
          <Input
            name="contract_id"
            placeholder="Insira o contrato referente a NFT que será transferida"
            setter={setTransferInfo}
          />
          <Input
            name="transfer_to"
            placeholder="Insira o endereço da carteira que receberá a NFT"
            setter={setTransferInfo}
          />
          {isLoading ? (
            <Button disabled style={{ width: "fit-content" }}>
              <ReactLoading type="spinningBubbles" height="30px" width={40} />
            </Button>
          ) : (
            <Button onClick={transferNFT}>Transfer NFT</Button>
          )}
        </InputWrapper>
      </PageWrapper>
    </>
  );
};

export { TransferNFTPage };
