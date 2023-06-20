import { Container, Subtitle, TextWrapper, Title } from "@molecules/Hero/styles";
import React from "react";

const Hero = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>NFTNest</Title>
        <Subtitle>Bringing your digital creations to life</Subtitle>
      </TextWrapper>
    </Container>
  );
};

export { Hero };
