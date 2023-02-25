import { css } from "@emotion/react";

export const container = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(150deg, #d9dbe2, #808aac 100%, #282d39 0);
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
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 7%;
  background-color: #4a5162;
  border-radius: 24px;
  box-shadow: 0 2px 15px rgb(0 0 0 / 68%);
`;

export const header = css`
  color: white;
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
  border: none;
  border-bottom: 2px solid #726dfe;
  outline: none;
  height: 50px;
  width: 90%;
  background-color: transparent;
  padding: 2%;
  color: white;
  font-size: 16px;
`;

export const passwordInputWrapper = css`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const editPasswordInput = css`
  color: black;
  border: none;
  border-bottom: 2px solid #726dfe;
  outline: none;
  height: 50px;
  width: 90%;
  background-color: transparent;
  padding: 2%;
  color: white;
  font-size: 16px;
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
  background-color: #726dfe;
  width: 90%;
  padding: 3%;
  font-weight: 700;
  font-size: 15px;
`;

export const bottomContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  background-color: #4a5162;
  border-radius: 24px;
  box-shadow: 0 2px 15px rgb(0 0 0 / 68%);
  color: white;
`;

export const bottomWrapper = css`
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const bottomTextDiv = css`
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
  width: 100%;
  font-weight: 700;
  color: #726dfe;
`;

export const arrayDiv = css`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 30px;
  border-radius: 50%;
  padding: 1%;
  background-color: #726dfe;
`;

export const editArrayImg = css`
  width: 20px;
  height: 20px;
`;

export const forgotPasswordSpan = css`
  text-align: center;
`;

export const forgotPasswordText = css`
  color: #726dfe;
  font-size: 20px;
  font-weight: 700;
`;
