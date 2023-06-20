import styled from "styled-components";

export const Table = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
  height: fit-content;
  width: 100%;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #a1375c;
  width: 100%;
  border-radius: 8px 8px 0 0;
  padding: 1%;
  max-width: 840px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #a1375c;
  width: 100%;

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
  padding: 1%;
  max-width: 840px;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  max-width: 840px;
  border: 1px solid #d3d3d3;
`;

export const Divider = styled.div`
  width: 0;
  height: 100%;
  margin: 0 15px;
  border: 1px solid #d3d3d3;
`;

export const ContractName = styled.span``;
export const ContractSymbol = styled.span``;
export const ContractAddress = styled.span``;

export const HeaderName = styled.span`
  font-weight: 700;
  margin-left: 80px;
  margin-right: 125px;
`;
export const HeaderSymbol = styled.span`
  font-weight: 700;
  margin-right: 250px;
`;
export const HeaderAddress = styled.span`
  font-weight: 700;
`;
