import { css } from "@emotion/react";

export const input = css`
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const form = css`
  display: flex;
  width: 100%;
`;

export const editInput = css`
  width: 100%;
  border: none;
  outline: none;
  color: #2f2d52;
  font-size: 18px;
  background-color: transparent;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const send = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const editImg = css`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

export const editBtn = css`
  border: none;
  padding: 10px 15px;
  color: white;
  background-color: #8da4f1;
  cursor: pointer;
`;
