import { css } from "@emotion/react";

export const container = css`
  height: calc(100vh - 70px);
  width: 100vw;
  display: flex;
  background-color: rgb(203, 195, 227);
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
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 2px 15px rgb(0 0 0 / 68%);
  border: none;

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
    width: 90%;
  }
`;

export const header = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  align-items: center;
  width: 100%;
`;

export const headerText = css`
  font-size: 35px;
  font-weight: 700;
  color: gray;
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

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
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

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
  }
`;

export const nameInput = css`
  background-color: transparent;
  height: 50px;
  width: 48%;
  border: none;
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  color: black;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const surnameInput = css`
  background-color: transparent;
  height: 50px;
  width: 48%;
  border: none;
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  color: black;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const editInput = css`
  background-color: transparent;
  height: 50px;
  border: none;
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  width: 80%;
  color: black;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
  }
`;

export const secondRowInputContainer = css`
  display: flex;
  color: black;
  justify-content: center;
  width: 100%;
  position: relative;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
  }
`;

export const passwordInput = css`
  background-color: transparent;
  height: 50px;
  border: none;
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  width: 80%;
  color: black;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
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
    right: 5px;
  }
`;

export const dateContainer = css`
  display: flex;
  flex-direction: column;
  width: 80%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
  }
`;

export const dateHeader = css`
  color: black;
  background-color: rgb(207, 159, 255);
  border-radius: 15px;
  padding: 1%;
  color: white;
`;

export const editDateInput = css`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  height: 50px;
  width: 100%;
  color: gray;
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
  background-color: rgb(207, 159, 255);
  width: 80%;
  padding: 3%;
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

export const buttonText = css`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const insteadDiv = css`
  padding: 5%;
`;

export const editLink = css`
  color: rgb(207, 159, 255);
  font-weight: 700;
`;
