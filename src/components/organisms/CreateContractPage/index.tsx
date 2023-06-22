import { Button } from "@atoms/Button";
import { Input } from "@atoms/Input";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import React, { useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { notification } from "@utils/notification";
import axios from "axios";

const CreateContractPage: React.FC<{ userWallet: string }> = ({ userWallet }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [contractInfo, setContractInfo] = useState<any>({
    name: "",
    symbol: "",
  });

  const createContract = async () => {
    setIsLoading(true);
    const options = {
      method: "POST",
      url: "https://api.nftport.xyz/v0/contracts",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_NFTPORT_API_KEY,
      },
      data: {
        chain: "goerli",
        name: contractInfo.name,
        symbol: contractInfo.symbol,
        owner_address: userWallet,
        metadata_updatable: true,
        type: "erc721",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        notification("Contract Created and Deployed!", "success", response?.data.transaction_external_url);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        notification("Contract Creation Failed!", "danger", error.toString());
        setIsLoading(false);
      });
  };

  return (
    <>
      <ReactNotifications />
      <PageWrapper>
        <InputWrapper>
          <Input name="name" placeholder="Digite qual o nome da sua coleção" setter={setContractInfo} />
          <Input name="symbol" placeholder="Insira uma sigla para representação da coleção" setter={setContractInfo} />

          {isLoading ? (
            <Button disabled>
              <ReactLoading type="spinningBubbles" height="30px" width={40} />
            </Button>
          ) : (
            <Button onClick={createContract}>Create Contract</Button>
          )}
        </InputWrapper>
      </PageWrapper>
    </>
  );
};

export { CreateContractPage };
