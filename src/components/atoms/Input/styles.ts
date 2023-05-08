import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px 0;
  background-color: white;
  opacity: 0.8;

  z-index: 2;
  overflow: hidden;
  min-width: 500px;
  width: 100%;
  height: 50px;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 40px;
    background: linear-gradient(#00ccff, #d400d4);
    animation: ${spin} 5s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    background: #0e1538;
    border-radius: 8px;
  }

  input {
    z-index: 9999;
    background: #0e1538;
    border: none;
    outline: none;
    width: 100%;
    color: white;
    margin: 0 10px;

    &::placeholder {
      color: white;
    }
  }
`;
