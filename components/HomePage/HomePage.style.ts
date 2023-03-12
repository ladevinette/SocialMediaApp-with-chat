import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: rgb(203, 195, 227);

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    justify-content: center;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

export const leftDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  //xl-size
  @media (min-width: 1536px) {
    height: 100%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 23%;
    height: 86%;
    margin-top: 10%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    display: none;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 50%;
    background-color: red;
  }
`;

export const futuresContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 7%;
  gap: 20px;
  color: black;
  width: 60%;
  height: 90%;

  //xl-size
  @media (min-width: 1536px) {
    height: calc(100% - 20px);
    margin-top: 0%;
  }

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 80%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 96%;
    height: 90%;
    margin-top: 0%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    height: 70%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
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

  //xl-size
  @media (min-width: 1536px) {
    height: 350px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    height: 300px;
  }
`;

export const tileButton = css`
  background-color: rgb(207, 159, 255);
  font-size: 14px;
  font-weight: 700;
  padding: 3% 7% 3% 7%;
  border: none;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
  }
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
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const colorGray = css`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: gray;

  //xl-size
  @media (min-width: 1536px) {
    font-size: 14px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    font-size: 12px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 12px;
  }
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

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 60%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 98%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const divTop = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
    background-color: transparent;
  }

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const addPostContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: white;
  border: 2px solid rgb(207, 159, 255);
  border-radius: 25px;
  margin-top: 12%;
  padding-bottom: 1%;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 90%;
    margin-top: 12%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 90%;
    margin-top: 5%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 90%;
    margin-top: 12%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 80%;
    margin: 5%;
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
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
  }
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

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const postContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  width: 100%;
`;

export const rightDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 20%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 20%;
    display: none;
  }
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
  height: 90%;
  background-color: white;
  margin-top: 5%;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 95%;
    height: 95%;
    margin-top: 7%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    margin-top: 10%;
    width: 94%;
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
  transition: all 0.05s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

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
    width: 98%;
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
  width: 40px;
`;

export const editProfPhoto = css`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border: 1px solid white;
`;

export const editNameSurname = css`
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    font-size: 14px;
  }
`;

export const dateEdit = css`
  margin-left: 10px;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  color: gray;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    display: none;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    display: none;
  }
`;

export const userRightDivBottom = css`
  width: 70%;
  height: 20%;
`;

export const editRightPhoto = css`
  width: 100%;
  height: 100%;
`;

export const infiniteScroll = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
`;
