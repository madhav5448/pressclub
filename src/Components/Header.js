import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <p style={{fontWeight:800,fontSize:"30px"}}>Madhya Pradesh press Club</p>
      </NavLink>
      <NavBar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;