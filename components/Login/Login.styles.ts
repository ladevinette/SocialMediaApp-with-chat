import { css } from "@emotion/react";

export const container = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const containerWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin: auto;
  padding: 3%;
  width: 40%;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    background-color: yellow;
    width: 60%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    background-color: green;
    width: 80%;
  }
`;

export const loginContainer = css`
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(45, 85, 255);
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const header = css`
  color: black;
`;

export const inputsContainer = css`
  padding: 3%;
  width: 90%;
`;

export const inputsWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const emailEdit = css`
  color: black;
  border: 2px solid rgba(45, 85, 255);
  height: 50px;
  width: 90%;
  background-color: rgb(120, 120, 120, 0.2);
`;

export const passwordInputWrapper = css`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const editPasswordInput = css`
  color: black;
  position: relative;
  border: 2px solid rgba(45, 85, 255);
  background-color: rgb(120, 120, 120, 0.2);
  height: 50px;
  width: 90%;
`;

export const visibilityIcon = css`
  width: 30px;
  position: absolute;
  top: 10;
  right: 50px;
  height: 50px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    right: 40px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    right: 20px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    right: 25px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    right: 20px;
  }
`;

export const logginButtonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5%;
  margin-top: 7%;
  justify-content: center;
  align-items: center;
`;

export const editLogginButton = css`
  background-color: rgba(45, 85, 255);
  width: 90%;
  padding: 4%;
`;

export const bottomContainer = css`
  display: flex;
  border: 2px solid rgba(45, 85, 255);
  justify-content: center;
  align-items: center;
`;

export const bottomWrapper = css`
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const bottomTextDiv = css`
  color: black;
  text-align: center;
`;

export const bottomText = css`
  font-size: 20px;
  font-weight: 500;
`;

export const createProfileDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(45, 85, 255);
  width: 100%;
  font-weight: 700;
`;

export const arrayDiv = css`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 30px;
  background-color: rgba(45, 85, 255);
  border-radius: 50%;
  padding: 1%;
`;

export const editArrayImg = css`
  width: 20px;
  height: 20px;
`;

export const forgotPasswordSpan = css`
  text-align: center;
`;

export const forgotPasswordText = css`
  color: rgba(45, 85, 255);
  font-weight: 700;
`;
