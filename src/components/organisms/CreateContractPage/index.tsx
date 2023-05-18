import { Button } from "@atoms/Button";
import { Input } from "@atoms/Input";
import { InputState } from "@atoms/Input/types";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import React, { useState } from "react";

const CreateContractPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contractInfo, setContractInfo] = useState<InputState>({
    name: "",
    symbol: "",
  });

  const createContract = async () => {};

  return (
    <PageWrapper>
      <InputWrapper>
        <Input name="name" placeholder="Digite qual o nome da sua coleção" setter={setContractInfo} />
        <Input name="symbol" placeholder="Insira uma sigla para representação da coleção" setter={setContractInfo} />

        {isLoading ? (
          <Button disabled style={{ width: "fit-content" }}>
            <ReactLoading type="spinningBubbles" height="auto" width={40} />
          </Button>
        ) : (
          <Button onClick={createContract}>Upload NFT</Button>
        )}
      </InputWrapper>
    </PageWrapper>
  );
};

export { CreateContractPage };
