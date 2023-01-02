import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";
import image from "../Image/runningLogo.gif"
// import { useGlobalContext } from "../context";

const HeroSection = () => {
//   const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading"></h1>
          <p className="hero-para">
          A Press club is an organization for journalists and others professionally engaged in the production and dissemination of news.The tasks of the association include safeguarding freedom of the press and journalistic ethics, networking domestic and foreign journalists and organizing press conferences.<br></br> 
          
          The Madhya Pradesh Press Club is basically a meeting point for the journalists.
          </p>

          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
       
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
   
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
     color:  rgb(98 84 243); font-family: 'Open Sans Condensed', sans-serif; font-size: 40px; font-weight: 700; line-height: 64px; margin: 0 0 0;  text-transform: uppercase; 
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
     color: #333333; font-family: Georgia, serif; font-size: 18px; line-height: 28px; margin: 0 0 28px; 
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;