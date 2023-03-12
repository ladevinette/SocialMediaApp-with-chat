import { css } from "@emotion/react";

export const container = css`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(203, 195, 227);
`;

export const containerWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin: auto;
  padding: 3%;
  width: 700px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 60%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
  }
`;

export const loginContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 7%;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 2px 15px rgb(0 0 0 / 68%);
`;

export const header = css`
  color: gray;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 23px;
  }
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
  border: none;
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  height: 50px;
  width: 90%;
  background-color: transparent;
  padding: 2%;
  color: black;
  font-size: 16px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    font-size: 15px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
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
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  height: 50px;
  width: 90%;
  background-color: transparent;
  padding: 2%;
  color: black;
  font-size: 16px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    font-size: 15px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 15px;
    width: 100%;
    font-weight: 500;
  }
`;

export const visibilityIcon = css`
  width: 30px;
  position: absolute;
  top: 10;
  right: 50px;
  height: 50px;
  cursor: pointer;

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
    right: 0px;
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
  background-color: rgb(207, 159, 255);
  width: 90%;
  padding: 3%;
  font-weight: 700;
  font-size: 15px;
  border: none;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const bottomContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 2px 15px rgb(0 0 0 / 68%);
  color: gray;
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

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 16px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const createProfileDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 700;
  color: rgb(207, 159, 255);
`;

export const arrayDiv = css`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 30px;
  border-radius: 50%;
  padding: 1%;
  background-color: rgb(207, 159, 255);
`;

export const editArrayImg = css`
  width: 20px;
  height: 20px;
`;

export const forgotPasswordSpan = css`
  text-align: center;
`;

export const forgotPasswordText = css`
  color: rgb(207, 159, 255);
  font-size: 23px;
  font-weight: 700;
`;
