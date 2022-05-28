import React from "react";
import styled from "styled-components";
import "./Heading.css";

const Header = styled.header`
  max-width: 100%;
  font-family: "Ms Madi", cursive;
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 80px;
  border-bottom: 5px solid #85b4eb;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 10vw;
  }
  @media (max-width: 600px) {
    font-size: 10vw;
    letter-spacing: 5px;
  }
`;

export const Heading = () => {
  return (
    <>
      <Header className="header">
        <H1>Random User Generator</H1>
      </Header>
    </>
  );
};
