import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: rgb(203, 195, 227);

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

export const leftDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  width: 25%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 50%;
  }
`;

export const futuresContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: black;
  width: 60%;
  height: 90%;
  /* background-color: white; */

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 80%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 90%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

export const futureTile = css`
  padding: 3%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 20px;
`;

export const tileButton = css`
  background-color: rgb(207, 159, 255);
  font-size: 14px;
  font-weight: 700;
  padding: 3% 7% 3% 7%;
  /* padding: 3%; */
  border: none;
  border-radius: 30px;
`;

export const logOutButton = css`
  text-align: center;
  padding: 3%;
  font-size: 17px;
  font-weight: 700;
  width: 100%;
  color: white;
  background-color: rgb(207, 159, 255);
  border-radius: 30px;
  cursor: pointer;
`;

export const colorGray = css`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: gray;
`;

export const tilePhotoContainer = css`
  width: 100%;
`;

export const editTilePhoto = css`
  width: 100%;
  height: 80%;
`;

export const containerWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
    background-color: green;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const divTop = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 80%;
  }
`;

export const addPostContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  /* background-color: rgba(159, 90, 253, 0.4); */
  background-color: white;
  border: 2px solid rgb(207, 159, 255);
  border-radius: 25px;
  margin-top: 12%;
  padding-bottom: 1%;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 90%;
    margin-top: 16%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 100%;
    margin-top: 20%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    margin-top: 22%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    margin-top: 25%;
  }
`;

export const h3 = css`
  padding: 3%;
  color: black;
`;

export const divBottom = css`
  width: 40%;
`;

export const addPostHeader = css`
  letter-spacing: 2px;
  padding: 1%;
  font-weight: 700;
  color: gray;
  font-size: 20px;
  width: 100%;
  text-align: center;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const inputContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60%;
`;

export const plusButtton = css`
  font-size: 30px;
  border: none;
  background: none;
  cursor: pointer;
  color: pink;
`;

export const submitButton = css`
  border: none;
  background-color: lightgreen;
  border-radius: 15px;
  padding: 1% 3% 1% 3%;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;

export const editForm = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const editInputFile = css`
  display: flex;
  &::file-selector-button {
    background-color: rgb(207, 159, 255);
    cursor: pointer;
    padding: 3% 5% 3% 5%;
    font-weight: 500;
    font-weight: 500;
    border: none;
    border-radius: 15px;
  }
`;

export const editUploadImg = css`
  width: 50%;
  height: 40%;
`;

export const textAreaDiv = css`
  width: 90%;
`;

export const textArea = css`
  padding: 1%;
  font-size: 15px;
  width: 100%;
  height: 60px;
  background-color: rgb(207, 159, 255, 0.3);
  color: black;
  resize: none;
  border-radius: 15px;
  border: 2px solid rgb(207, 159, 255);

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const bottomWrapper = css`
  margin-top: 1%;
`;

export const postContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  /* background-color: red; */
  width: 100%;
`;

export const rightDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const rightDivContentWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  color: gray;
  border-radius: 20px;
  width: 70%;
  height: 85%;
  background-color: white;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 100%;
    height: 90%;
    margin-top: 7%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    margin-top: 10%;
    width: 100%;
    height: 90%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    height: 90%;
    align-items: center;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`;

export const rightDivHeader = css`
  padding: 2%;
  font-weight: 700;
  font-size: 18px;
`;

export const rightDivBottom = css`
  width: 90%;
  height: 25%;
`;

export const userContainer = css`
  display: flex;
  flex-direction: row;
  color: gray;
  padding: 2%;
  border-radius: 20px;
  width: 80%;
  height: 45px;
  background-color: rgb(207, 159, 255, 0.9);

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 90%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 95%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 95%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`;

export const userProf = css`
  display: flex;
  padding: 2%;
  justify-content: center;
  text-align: center;
  width: 20%;
`;

export const editProfPhoto = css`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const editNameSurname = css`
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const dateEdit = css`
  margin-left: 10px;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  color: gray;
`;
