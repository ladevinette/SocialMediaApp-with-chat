import { css } from "@emotion/react";

export const search = css`
  border-bottom: 1px solid gray;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const searchForm = css`
  padding: 10px;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 5%;
  }
`;

export const userChat = css`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;
`;

export const editImage = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const editInput = css`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 10px;
  }
`;
