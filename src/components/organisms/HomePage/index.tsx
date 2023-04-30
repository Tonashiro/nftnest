import { Step } from "@molecules/Step";
import { Hero, Container, AOSWrapper } from "@organisms/HomePage/HomePage.styles";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContentWrapper } from "./HomePage.styles";
import { steps } from "@constants/steps";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Hero />
      <ContentWrapper>
        {steps.map((value, index) => (
          <AOSWrapper
            data-aos={`fade-${value.side}`}
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-offset={index === 0 ? "50" : "250"}
            key={`${value.stepNumber} index`}>
            <Step
              title={value.title}
              description={value.description}
              side={value.side}
              stepNumber={value.stepNumber}
              stepImg={value.stepImg}
              stepImgAlt={value.stepImgAlt}
              backgroundImg={value.backgroundImg}
            />
          </AOSWrapper>
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default HomePage;
