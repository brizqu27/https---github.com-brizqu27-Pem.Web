import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const HeroSection = styled(Link)`
  background: linear-gradient(
      to bottom,
      rgba(10, 12, 44, 0.8) 3rem,
      transparent 10rem
    ),
    url(https://drive.google.com/file/d/1bVlIbPnqZK0UUPOjBethnGaYm2uphwRX/view?usp=drive_link);
  background-position: center, bottom left;
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fafafc;
  padding: 10rem 3rem; /* Adjust padding to center content */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); /* Add a subtle box shadow */

  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: black;
  }

  @media (max-width: 576px) {
    background: linear-gradient(
        to bottom,
        rgba(10, 12, 44, 0.8) 3rem,
        transparent
      ),
      url(https://drive.google.com/file/d/1bVlIbPnqZK0UUPOjBethnGaYm2uphwRX/view?usp=drive_link);
    padding: 5rem 3rem;
  }
`;
