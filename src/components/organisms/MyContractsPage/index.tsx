import { useMetamaskState } from "@context/MetamaskContext";
import ReactLoading from "react-loading";
import {
  ContractAddress,
  ContractName,
  ContractSymbol,
  Header,
  HeaderAddress,
  HeaderName,
  HeaderSymbol,
  HorizontalDivider,
  Row,
  Table,
} from "@organisms/MyContractsPage/styles";
import { LoadingContainer } from "@organisms/MyNFTSPage/styles";
import { PageWrapper } from "@styles/ GlobalStyle";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyContractsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allContracts, setAllContracts] = useState<any>();
  const { currentAccount } = useMetamaskState();

  useEffect(() => {
    const getContracts = async () => {
      setIsLoading(true);
      const url = `https://api.nftport.xyz/v0/accounts/contracts/${currentAccount}?chain=goerli&type=owns_contracts&page_size=50`;
      const AUTHORIZATION = process.env.NEXT_PUBLIC_NFTPORT_API_KEY;

      console.log(AUTHORIZATION);
      await axios
        .get(url, {
          headers: {
            Authorization: AUTHORIZATION,
            "Content-Type": "application/json",
            accept: "application/json",
          },
        })
        .then(function (response) {
          setAllContracts(response.data.contracts);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.error(error);
          setIsLoading(false);
        });
    };

    getContracts();
  }, [currentAccount]);

  return (
    <PageWrapper>
      {isLoading ? (
        <LoadingContainer>
          <ReactLoading type="spinningBubbles" height={25} width={40} />
        </LoadingContainer>
      ) : (
        allContracts && (
          <Table>
            <Header>
              <HeaderName>Name</HeaderName>
              <HeaderSymbol>Symbol</HeaderSymbol>
              <HeaderAddress>Address</HeaderAddress>
            </Header>
            <HorizontalDivider />
            {allContracts.map((contract: any, index: any) => {
              return (
                <Row key={`contract-${index}`}>
                  <ContractName>{contract.name}</ContractName>
                  <ContractSymbol>{contract.symbol}</ContractSymbol>
                  <ContractAddress>{contract.address}</ContractAddress>
                </Row>
              );
            })}
          </Table>
        )
      )}
    </PageWrapper>
  );
};

export { MyContractsPage };
