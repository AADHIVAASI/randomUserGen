import React from "react";
import "./FetchButton.css";
import enter from "../../media/enter.png";
import down from "../../media/down.png";
import styled from "styled-components";

const Alternative = styled.span`
  margin: 10px;
  font-size: 21px;
  font-family: "Bebas Neue";

  @media (max-width: 500px), (max-height: 720px) {
    display: none;
  }
`;

export const FetchButton = (props) => {
  return (
    <>
      <div
        className="refresh"
        onClick={props.fetchUser}
        onDoubleClick={props.preventRapidClick}
        onKeyDown={(e) => props.fetchUserEnter(e)}
        onScroll={(e) => props.fetchUserEnter(e)}
        style={{
          backgroundImage:
            "linear-gradient(25deg,rgb(238, 174, 202) 0%,rgb(148, 187, 233) 100%)",
        }}
      >
        <div
          className="slider"
          style={{
            backgroundColor: "black",
            transition: "all 200ms ease-in-out 0s",
            opacity: "1",
          }}
        ></div>
        <span style={{ transition: "all 1s ease-in-out 1s" }}>REFRESH</span>
      </div>
      <Alternative>
        HIT <img src={enter} /> / SCROLL <img src={down} />
      </Alternative>
    </>
  );
};
