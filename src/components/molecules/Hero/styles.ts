import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  margin-bottom: 4%;
  background: url("background.webp") no-repeat center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  gap: 30px;

  width: 60%;
  padding-top: 15%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  background-color: red;

  background-image: linear-gradient(45deg, #6cc3f0, #a1375c);

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  width: 100%;
`;

export const Subtitle = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  color: white;

  width: 100%;

  background-image: linear-gradient(45deg, #6cc3f0, #a1375c);

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
