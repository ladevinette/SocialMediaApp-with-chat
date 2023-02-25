import { css } from "@emotion/react";

export const container = css`
  position: absolute;
  top: 10px;
  right: 15px;
  height: 50px;
  width: 40%;
  border-top-left-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(159, 90, 253, 0.6);

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 60%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 70%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 95%;
    font-size: 14px;
  }
`;

export const containerWrapper = css`
  display: flex;
  justify-content: space-around;
  margin-left: 5%;
  width: 100%;
`;
