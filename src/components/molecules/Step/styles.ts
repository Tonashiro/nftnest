import styled from "styled-components";
import { IStepProps } from "./types";

interface SideProps {
  side: "right" | "left";
}

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 1% 0;

  color: white;
`;

export const ImagesWrapper = styled.div<SideProps>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 50%;
  height: 50%;

  order: ${(props) => (props.side === "right" ? 2 : 1)};
`;

export const Background = styled.div<SideProps>`
  position: absolute;
  top: 130px;
  right: 0;
  left: 0;
  transform: ${(props) => (props.side === "left" ? "scaleY(-1)" : "scaleY(-1) scaleX(-1)")};
  width: 100%;
  height: 100%;

  opacity: 0.3;
`;

export const StepImage = styled.div<Pick<IStepProps, "side">>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 10%;
  margin: ${({ side }) => (side === "right" ? "0 0 0 20%" : "0 0 0 8%")};
  width: 650px;
  height: 400px;
  z-index: 99;
`;

export const ContentWrapper = styled.div<SideProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  gap: 10px;

  order: ${(props) => (props.side === "right" ? 1 : 2)};
`;

export const StepNumber = styled.h4``;

export const Title = styled.h1``;

export const Description = styled.p``;
