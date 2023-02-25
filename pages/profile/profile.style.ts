import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  height: 100vh;
  background-color: rgb(203, 195, 227);
  display: flex;
  flex-direction: row;
  justify-content: center;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const leftContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
    height: 20%;
    margin-top: 5%;
  }
`;

export const leftWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 85%;
  width: 50%;
  background-color: rgb(207, 159, 255);
  border: 3px solid rgb(207, 159, 255);

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    background-color: purple;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 70%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 80%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const userProfilePhotoCpntainer = css`
  width: 60%;
  height: 27%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    width: 30%;
    height: 70%;
  }
`;

export const editUserProfilePhoto = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const userDataContainer = css`
  width: 70%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const nameAndSurname = css`
  letter-spacing: 1px;
  width: 100%;
  padding: 4%;
  font-weight: 700;
  font-size: 30px;
  text-align: center;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    font-size: 25px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    width: 100%;
    font-size: 15px;
    padding: 1%;
  }
`;

export const country = css`
  width: 100%;
  padding: 4%;
  font-weight: 700;
  font-size: 20px;
  text-align: center;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    width: 100%;
    font-size: 15px;
    padding: 3%;
  }
`;

export const date = css`
  width: 100%;
  padding: 4%;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: gray;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    width: 100%;
    font-size: 15px;
    padding: 1%;
  }
`;

export const divContainer = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
  }
`;

export const divWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 85%;
  border-radius: 15px;
  background-color: white;
  border: 3px solid rgb(207, 159, 255);

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    height: 100%;
  }
`;

export const staticTopContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  width: 100%;
  background-color: rgb(207, 159, 255);
`;

export const staticTopContainerUserInfo = css`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
`;

export const showUserInfoBtn = css`
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  padding: 3% 5% 3% 5%;
  border-radius: 30px;
`;

export const showUserPostsBtn = css`
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  padding: 3% 5% 3% 5%;
  border-radius: 30px;
`;

export const userDiv = css`
  width: 20%;
  background-color: rgba(38, 194, 129);
  position: relative;
  color: black;
  border-right: 2px solid black;
  border-left: 2px solid black;
`;

export const editProfilePhoto = css`
  border-radius: 70px;
  border: 2px solid black;
  position: absolute;
  bottom: 45px;
  right: 20px;
`;

export const nationality = css`
  font-weight: 700;
  color: gray;
  text-align: center;
`;

export const dynamicBottomContainer = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
