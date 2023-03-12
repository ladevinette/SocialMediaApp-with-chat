import { css } from "@emotion/react";

export const container = css`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(203, 195, 227);
`;

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin: auto;
  padding: 3%;
  width: 40%;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 60%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 80%;
  }
`;

export const emailContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 7%;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 2px 15px rgb(0 0 0 / 68%);
  gap: 20px;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const editPasswordInput = css`
  color: black;
  border: none;
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  height: 50px;
  width: 90%;
  background-color: transparent;
  padding: 2%;
  color: black;
  font-size: 16px;
`;

export const sendResetLink = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const text = css`
  font-size: 20px;
  font-weight: 600;
  color: gray;
`;

export const button = css`
  background-color: rgb(207, 159, 255);
  border-radius: 50%;
  border: none;
`;

export const editArrayImg = css`
  width: 40px;
  height: 40px;
`;

export const login = css`
  color: rgb(207, 159, 255);
  font-size: 20px;
  font-weight: 700;
`;
