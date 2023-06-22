import {
  Background,
  Container,
  ContentWrapper,
  Description,
  ImagesWrapper,
  StepImage,
  StepNumber,
  Title,
} from "@molecules/Step/styles";
import { IStepProps } from "@molecules/Step/types";
import Image from "next/image";
import React from "react";

const Step: React.FC<IStepProps> = ({ stepNumber, title, backgroundImg, description, side, stepImg, stepImgAlt }) => {
  return (
    <Container>
      <ImagesWrapper side={side}>
        <Background side={side}>
          <Image src={backgroundImg} alt={stepImgAlt} width={400} height={400} quality={100} style={{}} />
        </Background>
        <StepImage side={side}>
          <Image
            src={stepImg}
            alt={stepImgAlt}
            width={761}
            height={400}
            className="step-image"
            style={{ borderRadius: "10%" }}
            quality={75}
          />
        </StepImage>
      </ImagesWrapper>

      <ContentWrapper side={side}>
        <StepNumber>Step. {stepNumber}</StepNumber>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </Container>
  );
};

export { Step };
