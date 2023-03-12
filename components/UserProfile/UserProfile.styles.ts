import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: rgb(203, 195, 227);
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const leftContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 30%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 30%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
    height: 15%;
    margin-top: 5%;
  }
`;

export const leftWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  height: 85%;
  width: 40%;
  background-color: rgb(207, 159, 255);
  border: 3px solid rgb(207, 159, 255);

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 70%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 90%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;

export const topWrapper = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50%;
  width: 100%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    align-items: center;
    height: 100%;
    width: 50%;
  }
`;

export const userProfilePhotoContainer = css`
  width: 180px;
  height: 180px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 150px;
    height: 150px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 140px;
    height: 140px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 130px;
    height: 130px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    width: 80px;
    height: 80px;
  }
`;

export const editUserProfilePhoto = css`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 2px solid white;
`;

export const userDataWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 50%;
    height: 100%;
  }
`;

export const userDataContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: center;
  }
`;

export const nameAndSurname = css`
  letter-spacing: 0px;
  width: 100%;
  padding: 4%;
  font-weight: 900;
  font-size: 30px;
  text-align: center;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    font-size: 25px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    font-size: 23px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 22px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
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
    width: 100%;
    font-size: 15px;
    padding: 3%;
  }
`;

export const date = css`
  width: 100%;
  padding: 4%;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  color: lightgray;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    width: 100%;
    font-size: 13px;
    padding: 1%;
  }
`;

export const divContainer = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 60%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
    height: 80%;
  }
`;

export const divWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 85%;
  border-radius: 25px;
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
  justify-content: center;
  flex-direction: column;
  padding: 2%;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background-color: rgb(207, 159, 255);
  height: 50px;

  //xl-size
  @media (min-width: 1536px) {
    height: 65px;
    padding: 0%;
  }

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    height: 65px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    height: 65px;
  }
`;

export const staticTopContainerUserInfo = css`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  width: 100%;

  //xl-size
  @media (min-width: 1536px) {
    align-items: center;
    height: 100%;
  }

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    height: 100%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    height: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 10px;
  }
`;

export const showUserInfoBtn = css`
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  padding: 3% 5% 3% 5%;
  border-radius: 30px;
  display: flex;
  align-items: center;

  //xl-size
  @media (min-width: 1536px) {
    padding-top: 1.5%;
    padding-bottom: 1%;
    padding-right: 2%;
    padding-left: 2%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 40%;
    padding: 1%;
    font-size: 15px;
  }
`;

export const showUserPostsBtn = css`
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  padding: 3% 5% 3% 5%;
  border-radius: 30px;
  display: flex;
  align-items: center;

  //xl-size
  @media (min-width: 1536px) {
    padding-top: 1.5%;
    padding-bottom: 1%;
    padding-right: 2%;
    padding-left: 2%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 40%;
    padding: 1%;
    font-size: 15px;
  }
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
  align-items: center;
  width: 100%;
  overflow: hidden;
  height: 100%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    height: 100%;
    padding: 2%;
  }
`;

export const postsContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
    background-color: transparent;
  }
`;

export const editInfiniteScroll = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
