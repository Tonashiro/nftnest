import { Button } from "@atoms/Button";
import { Input } from "@atoms/Input";
import { InputState } from "@atoms/Input/types";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import React, { useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { notification } from "@utils/notification";

const CreateContractPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contractInfo, setContractInfo] = useState<InputState>({
    name: "",
    symbol: "",
  });

  const createContract = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      notification(`Contract Succesfully Created`, "success", "Contract hash...");
    }, 3000);
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
