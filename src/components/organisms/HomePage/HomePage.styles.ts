import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background-color: #0f0e13;
  background-image: radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%),
    radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%);
  background-repeat: repeat-y;
`;

export const Hero = styled.div`
  width: 100%;
  height: 100svh;
  margin-bottom: 4%;
  background: url("background.webp") no-repeat center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  gap: 50px;
`;

export const AOSWrapper = styled.div``;
