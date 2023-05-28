import { Container, Subtitle, TextWrapper, Title } from "@molecules/Hero/styles";
import React from "react";

const Hero = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>Just a preview of the official title</Title>
        <Subtitle>This is first the subtitle subtitle subtitle</Subtitle>
        <Subtitle>The second subtitle </Subtitle>
      </TextWrapper>
    </Container>
  );
};

export { Hero };
