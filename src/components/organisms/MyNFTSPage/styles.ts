import styled from "styled-components"

export const MainList = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
  width: 75%;

  margin-top: 15%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  height: calc(100vh - 180px);
`;