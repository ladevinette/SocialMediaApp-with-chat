import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: rgb(203, 195, 227);

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3%;
  }
`;

export const leftContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 25%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 35%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 80%;
    height: 18%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
    height: 19%;
  }
`;

export const leftContainerWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3%;
  width: 70%;
  height: 85%;
  background-color: white;
  border-radius: 20px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: row;
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const leftContainerHeader = css`
  padding: 3%;
  color: gray;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 25px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    display: none;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`;

export const photoContainer = css`
  width: 100%;
  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 250px;
    height: 150px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 230px;
    height: 130px;
  }
`;

export const leftContainerPhoto = css`
  width: 100%;
  height: 100%;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const leftContainerMyProfile = css`
  background-color: rgb(207, 159, 255);
  font-size: 14px;
  font-weight: 700;
  padding: 3% 7% 3% 7%;
  /* padding: 3%; */
  border: none;
  border-radius: 30px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 10px;
    height: 40px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 10px;
    height: 40px;
  }
`;

export const centerContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 60%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 62%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 90%;
    align-items: baseline;
    padding: 3%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
    align-items: baseline;
    margin-top: 5%;
    height: 80%;
  }
`;

export const centerWrapper = css`
  padding: 1%;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 85%;
  background-color: white;
  border-radius: 20px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 90%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 90%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    height: 100%;
    padding: 0;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    height: 100%;
    padding: 0;
  }
`;

export const centerHeader = css`
  width: 25%;
  height: 100%;
  background-color: rgb(207, 159, 255);
  border-radius: 15px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 30%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 50%;
    /* order: 1; */
  }
`;

export const centerHeaderWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const centerProfileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70%;
`;

export const centerProfilePictureContainer = css`
  padding: 2%;
  width: 190px;
  height: 190px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 150px;
    height: 150px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 130px;
    height: 130px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 140px;
    height: 140px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 110px;
    height: 110px;
  }
`;

export const editCenterProfilePicture = css`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 2px solid white;
`;

export const centerUploadDiv = css`
  padding: 1%;
  display: flex;
  flex-direction: column;
`;

export const centerUploadDivTop = css`
  width: 100%;
`;

export const progressUpload = css`
  width: 100%;
  text-align: center;
`;

export const editFileInput = css`
  width: 90%;
  &::file-selector-button {
    background-color: lightgreen;
    cursor: pointer;
    padding: 3% 5% 3% 5%;
    font-weight: 500;
    font-weight: 700;
    border: none;
    border-radius: 15px;
  }
`;

export const contentContainer = css`
  width: 70%;
  color: black;
`;

export const contentWrapper = css`
  width: 100%;
  height: 100%;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 13px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    height: 100%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    height: 100%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    gap: 5px;
    height: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 5px;
    height: 100%;
  }
`;

export const divInputWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  width: 80%;
  padding: 2%;
  gap: 5px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 100%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 100%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    height: max-content;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    height: max-content;
    width: 100%;
  }
`;

export const inputHeader = css`
  color: gray;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  text-align: center;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    display: none;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`;

export const inputContainer = css`
  width: 70%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const inputPhotoContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const editInputImage = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const editInputImageWithoutRadius = css`
  width: 30px;
  height: 30px;
`;

export const editInput = css`
  color: black;
  border: none;
  background: none;
  border-bottom: 2px solid rgb(207, 159, 255);
  outline: none;
  height: 50px;
  width: 100%;
`;

export const editSubmitButton = css`
  border: none;
  background-color: lightgreen;
  border-radius: 15px;
  padding: 1% 5% 1% 5%;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;
