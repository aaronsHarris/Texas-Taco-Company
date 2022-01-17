import React from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
} from "../styles/Hero.styles";
const Hero = ({slides}) => {
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              <HeroSlider>
                <HeroImage />
                <HeroContent>
                  <h1>{slide.title}</h1>
                </HeroContent>
              </HeroSlider>
            </HeroSlide>
          );
        })}
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
