import React from "react";
import "./FetchButton.css";
import enter from "../../media/enter.png";
import down from "../../media/down.png";
import styled from "styled-components";
import { refreshStyle, sliderStyle, refreshTextStyle } from "../StaticObjs";

const Alternative = styled.span`
  margin: 10px;
  font-size: 21px;
  font-family: "Bebas Neue";

  @media (max-width: 500px), (max-height: 720px) {
    display: none;
  }
`;

const FetchButton = (props) => {
  return (
    <>
      <div
        className="refresh"
        onClick={props.fetchUser}
        onDoubleClick={props.preventRapidClick}
        onKeyDown={(e) => props.fetchUserEnter(e)}
        onScroll={(e) => props.fetchUserEnter(e)}
        style={refreshStyle}
      >
        <div className="slider" style={sliderStyle}></div>
        <span style={refreshTextStyle}>REFRESH</span>
      </div>
      <Alternative>
        HIT <img src={enter} alt="Hit Enter" /> / SCROLL{" "}
        <img src={down} alt="Scroll Down" />
      </Alternative>
    </>
  );
};

export default FetchButton;
