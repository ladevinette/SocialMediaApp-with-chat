import { css } from "@emotion/react";

export const profilePostsContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const postContainer = css`
  display: flex;
  color: black;
  width: 100%;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 90%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 70%;
  }
`;

export const info = css`
  display: flex;
  color: black;
`;
