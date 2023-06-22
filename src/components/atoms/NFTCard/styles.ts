import styled from "styled-components";

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  color: rgb(4, 17, 29);
  background-color: rgb(255, 255, 255);
  box-shadow: #000000 0px 4px 20px;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    box-shadow: #000000 5px 5px 15px;
  }

  img {
    transition: all 0.2s ease-in-out 0s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }

  h3 {
    margin: 20px 5% 10px 5%;
  }

  p {
    margin: 10px 5%;

    &:last-child {
      font-weight: bold;
    }
  }
`;

export const NFTName = styled.h3``;

export const NFTDescription = styled.p``;

export const NFTId = styled.p``;
