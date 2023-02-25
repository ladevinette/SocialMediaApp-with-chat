import { css } from "@emotion/react";

export const container = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  margin: auto;
  width: 40%;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 60%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 70%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 80%;
  }
`;

export const header = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  align-items: center;
  width: 100%;
  background-color: rgba(45, 85, 255);
`;

export const headerText = css`
  font-size: 35px;
  font-weight: 700;
`;

export const editForm = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const formContainer = css`
  padding: 2%;
  width: 90%;
`;

export const formWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const firstRowInputContainer = css`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;

export const nameInput = css`
  color: black;
  background-color: rgb(120, 120, 120, 0.1);
  height: 50px;
  width: 48%;
`;

export const surnameInput = css`
  color: black;
  background-color: rgb(120, 120, 120, 0.1);
  height: 50px;
  width: 48%;
`;

export const editInput = css`
  color: black;
  background-color: rgb(120, 120, 120, 0.1);
  height: 50px;
  width: 80%;
`;

export const secondRowInputContainer = css`
  display: flex;
  color: black;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const passwordInput = css`
  color: black;
  background-color: rgb(120, 120, 120, 0.1);
  position: relative;
  height: 50px;
  width: 80%;
`;

export const visibilityIcon = css`
  width: 30px;
  position: absolute;
  top: 10;
  right: 80px;
  height: 50px;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    right: 70px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    right: 60px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    right: 44px;
  }
`;

export const dateContainer = css`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const dateHeader = css`
  color: black;
  background-color: rgba(45, 85, 255, 0.9);
`;

export const editDateInput = css`
  background-color: rgb(120, 120, 120, 0.1);
  color: black;
  height: 50px;
  width: 100%;
`;

export const bottomContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5%;
  margin-top: 7%;
  justify-content: center;
  align-items: center;
`;

export const signInButton = css`
  background-color: rgba(45, 85, 255, 0.9);
  width: 80%;
  padding: 3%;
`;

export const buttonText = css`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const insteadDiv = css`
  padding: 5%;
`;

export const editLink = css`
  color: rgba(45, 85, 255, 0.9);
  font-weight: 700;
`;
