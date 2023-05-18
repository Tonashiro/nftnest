import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useMetamaskState } from '../../context/MetamaskContext';
import ReactLoading from "react-loading";

import { NFTCard } from "@atoms/NFTCard";
import { MainList, LoadingContainer } from "./styles";
import { INFTCard } from "@atoms/NFTCard/types";
import { PageWrapper } from "@styles/ GlobalStyle";

const MyNFTSPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allNfts, setAllNfts] = useState<INFTCard | undefined>(undefined);
  // const { currentAccount } = useMetamaskState();

  useEffect(() => {
    const getNfts = async () => {
      setIsLoading(true);
      const url = `https://api.nftport.xyz/v0/accounts/0xf5663d0eee3620c4a88e28e392aac72d077a8c4d`;
      const chain = process.env.NEXT_PUBLIC_APP_CHAIN;
      const AUTHORIZATION = process.env.NEXT_PUBLIC_NFTPORT_API_KEY;

      console.log(AUTHORIZATION);
      await axios
        .get(url, {
          params: {
            chain,
            include: "metadata",
          },
          headers: {
            Authorization: AUTHORIZATION,
            "Content-Type": "application/json",
            accept: "application/json",
          },
        })
        .then(function (response) {
          setAllNfts(response.data.nfts);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.error(error);
          setIsLoading(false);
        });
    };

    getNfts();
  }, []);

  return (
    <PageWrapper>
      <MainList>
        {isLoading && !allNfts ? (
          <LoadingContainer>
            <ReactLoading type="spinningBubbles" height={25} width={40} />
          </LoadingContainer>
        ) : (
          <>
            {allNfts &&
              Object.values(allNfts).map((value, index) => {
                return (
                  <NFTCard
                    name={value.name}
                    description={value.description}
                    file_url={value.file_url}
                    token_id={value.token_id}
                    key={`${index} - value.name`}
                  />
                );
              })}
          </>
        )}
      </MainList>
    </PageWrapper>
  );
};

export { MyNFTSPage };
