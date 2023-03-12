import { css } from "@emotion/react";

export const navbar = css`
  display: flex;
  align-items: center;
  background-color: #2f2d52;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: #ddddf7;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    justify-content: center;
    width: 100%;
  }
`;

export const logo = css`
  font-weight: bold;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`;

export const user = css`
  display: flex;
  gap: 10px;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
`;

export const img = css`
  background-color: #ddddf7;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
