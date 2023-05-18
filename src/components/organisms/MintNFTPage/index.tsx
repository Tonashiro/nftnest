import { Input } from "@atoms/Input";
import { InputState } from "@atoms/Input/types";
import { InputWrapper, PageWrapper } from "@styles/ GlobalStyle";
import ReactLoading from "react-loading";
import React, { useState } from "react";
import { Button } from "@atoms/Button";

const MintNFTPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mintInfo, setMintInfo] = useState<InputState>({
    mint_nft_uid: "",
    mint_contract_id: "",
    mint_to: "",
  });

  const mintNFT = async () => {};

  return (
    <PageWrapper>
      <InputWrapper>
        <Input name="mint_nft_uid" placeholder="Insira o UID do NFT que deseja realizar o mint" setter={setMintInfo} />
        <Input
          name=" mint_contract_i"
          placeholder="Insira o contrato referente a NFT que será feito o mint"
          setter={setMintInfo}
        />
        <Input name="mint_to" placeholder="Insira o endereço da carteira que receberá a NFT" setter={setMintInfo} />
        {isLoading ? (
          <Button disabled style={{ width: "fit-content" }}>
            <ReactLoading type="spinningBubbles" height="auto" width={40} />
          </Button>
        ) : (
          <Button onClick={mintNFT}>Upload NFT</Button>
        )}
      </InputWrapper>
    </PageWrapper>
  );
};

export { MintNFTPage };
