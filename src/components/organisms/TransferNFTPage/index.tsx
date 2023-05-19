import { Input } from "@atoms/Input";
import ReactLoading from "react-loading";
import { InputState } from "@atoms/Input/types";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import React, { useState } from "react";
import { Button } from "@atoms/Button";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { notification } from "@utils/notification";

const TransferNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transferInfo, setTransferInfo] = useState<InputState>({
    nft_uid: "",
    contract_id: "",
    transfer_to: "",
  });

  const transferNFT = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      notification(`NFT Succesfully Transfered`, "success", "Transfer transaction hash...");
    }, 3000);
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
