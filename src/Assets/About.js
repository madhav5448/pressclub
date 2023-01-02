import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";
import image from "../Image/about.jpg"

const About = () => {
  return (
    <Wrapper>
    <div className="container grid grid-two-column">
      <div className="section-hero-data">
        <p className="hero-top-data"></p>
        <h2 >Madhya Pradesh</h2><h2> Press Club</h2>
        <p className="hero-para">
        The Madhya Pradesh Press Club is a professional and social club for working journalists and communications professionals. It was Founded by Satya Narayan Sharma in 2013. It is led by an annually elected executive body, which consists of a president, vice president, secretary, joint secretary. It has around 150+ active members in different fields and district.
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
}
.hero-heading {
  text-transform: uppercase;
  font-size: 6.4rem;
}
.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
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
  


export default About