import { css } from "@emotion/react";

export const sidebar = css`
  flex: 1;
  background-color: #3e3c61;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 30%;
  }
`;
