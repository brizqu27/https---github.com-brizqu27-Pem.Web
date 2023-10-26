import React from "react";
import { HeroSection } from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroSection className="light hero">
        <div className="heroInner">
          <span>
            <h1>Selamat Datang ! Ini Adalah Bagian Main. . .</h1>
          </span>
        </div>
      </HeroSection>
    </>
  );
};

export default Hero;
