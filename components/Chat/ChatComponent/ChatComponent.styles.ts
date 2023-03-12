import { css } from "@emotion/react";

export const chat = css`
  flex: 2;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 70%;
    background-color: red;
  }
`;

export const chatInfo = css`
  height: 50px;
  background-color: #5d5b8d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: lightgray;
`;
