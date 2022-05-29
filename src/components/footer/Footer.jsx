import React from "react";
import styled from "styled-components";
import "./Footer.css";
import logo from "../../media/github.png";

const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
  border-top: 5px solid pink;
  font-family: "along";
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 10vh;
  position: absolute;
  bottom: 0px;
  @media (max-height: 700px) {
    height: 12vh;
  }
`;
const H1 = styled.h1`
  font-size: 20px;
  margin: 0 20px 0 0;
`;
const A = styled.a`
  align-self: center;
`;
const IMG = styled.img`
  margin: 0 0 0 25px;
`;

export const Footing = () => {
  return (
    <>
      <Footer>
        <A
          href="https://github.com/AADHIVAASI/randomUserGen"
          target="_blank"
          rel="noreferrer"
        >
          <IMG src={logo} alt="Github" />
        </A>
        <H1>by aadhivaasi</H1>
      </Footer>
    </>
  );
};
