import React from "react";
import { Button } from "../styles/Button.styles";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  Arrow,
  SliderButtons,
  NextArrow,
  PrevArrow,
} from "../styles/Hero.styles";



const Hero = ({ slides }) => {
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt}/>
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button
                    to={slide.path}
                    primary="true"
                    css={`
                      max-width: 160px;
                    `}
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            </HeroSlide>
          );
        })}
        <SliderButtons>
        <PrevArrow />
        <NextArrow />
        </SliderButtons>
        </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
