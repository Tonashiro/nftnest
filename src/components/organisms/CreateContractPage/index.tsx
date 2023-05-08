import { Input } from "@atoms/Input";
import { IContract } from "@organisms/CreateContractPage/types";
import { IUploadNFT } from "@organisms/UploadNFT/types";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import React, { useState } from "react";

const CreateContractPage = () => {
  const [contractInfo, setContractInfo] = useState<IContract | IUploadNFT>({
    name: "",
    symbol: "",
  });

  return (
    <PageWrapper>
      <InputWrapper>
        <Input name="name" placeholder="Digite qual o nome da sua coleção" setter={setContractInfo} />
        <Input name="symbol" placeholder="Insira uma sigla para representação da coleção" setter={setContractInfo} />
      </InputWrapper>
    </PageWrapper>
  );
};

export { CreateContractPage };
