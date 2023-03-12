import { css } from "@emotion/react";

export const home = css`
  background-color: #a7bcff;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const container = css`
  border: 1px solid white;
  border-radius: 10px;
  width: 65%;
  height: 90%;
  display: flex;
  overflow: hidden;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 80%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 85%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 90%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 98%;
  }
`;
