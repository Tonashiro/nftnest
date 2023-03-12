import { StyledButtonProps } from "./types";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  padding: 1%;
  border-radius: 16px;
  cursor: pointer;

  background-color: #1098fc;
  border: none;
  &:hover {
    background-color: #037dd6;
  }
`;

export const StyledButton = styled.a<StyledButtonProps>`
  text-decoration: none;
  color: white;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 600;
  
  transition: all 0.2s;

  &.isConnected {
    background-color: rgb(242, 246, 255);
    color: rgb(46, 125, 175);
    border: none;
    outline: none;
    &:hover {
      background-color: rgb(242, 246, 255);
      opacity: 0.8;
    }
  }
`;
