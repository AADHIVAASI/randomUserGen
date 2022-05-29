import React from "react";
import styled from "styled-components";
import "../../App.css";
import copy from "../../media/copy.png";

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.span`
  margin: 10px 5px;
  font-weight: 400;
  font-size: 2.7em;
  @media (max-width: 600px) {
    font-size: 2.1em;
  }
  @media (max-height: 700px) {
    margin: 10px 0 10px;
    font-size: 2.1em;
  }
`;

const Name = styled.span`
  margin: 10px 5px;
  font-size: 2.2em;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1px;

  @media (max-width: 600px) {
    font-size: 1.8em;
  }
  @media (max-height: 700px) {
    font-size: 1.6em;
  }
`;

const Picture = styled.img`
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 2px 2px 5px #000;
  width: 180px;
  height: 180px;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.2);
  }
  @media (max-height: 700px) {
    width: 140px;
    height: 140px;
  }
`;

const Email = styled.div`
  font-style: italic;
  margin: 10px 0 50px;
  font-size: 2em;
  @media (max-width: 600px) {
    font-size: 1.4em;
  }
  @media (max-height: 700px) {
    margin: 10px 0 20px;
    font-size: 1.4em;
  }
`;

const Copy = styled.span`
  align-self: center;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #ddd;
  }
`;
const RandomUser = (props) => {
  return (
    <>
      <div>
        <a
          href={props.user.thumbnail}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Picture src={props.user.thumbnail} alt={props.user.fName} />
        </a>
      </div>
      <Info className="information">
        <Title>{props.user.title}</Title>
        <Name>{props.user.fName}</Name>
        <Name>{props.user.lName}</Name>
        <Copy onClick={() => props.copy("name")}>
          <img src={copy} alt="Copy Full Name" />
        </Copy>
      </Info>
      <Email>
        {props.user.email}{" "}
        <Copy onClick={() => props.copy("mail")}>
          <img src={copy} alt="Copy Email Address" />
        </Copy>
      </Email>
    </>
  );
};

export default RandomUser;
