import { css } from "@emotion/react";
import bg from "../../assets/pageImages/6025273.jpg";

export const container = css`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: white;
  overflow: hidden;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const leftSideContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    height: 90%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    height: 80%;
  }
`;

export const leftSideWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 80%;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    height: 80%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    height: 80%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    height: 100%;
  }
`;

export const leftCenter = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const leftCenterPhotoContainer = css`
  width: 60%;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 80%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 80%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 50%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 80%;
  }
`;

export const leftTop = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 8%;
  border-radius: 25px;
  width: 100%;
`;

export const leftBottom = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const header = css`
  text-align: center;
  font-size: 60px;
  color: rgb(207, 159, 255);

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    font-size: 50px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    font-size: 38px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 30px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const rightSideContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const rightSideWrapper = css`
  display: flex;
  width: 90%;
  height: 85%;
  margin-top: 5%;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 90%;
    height: 60%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    display: none;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`;

export const photoEdit = css`
  width: 100%;
  height: 100%;
`;

export const paragraphDiv = css`
  width: 70%;
`;

export const paragraph = css`
  text-align: center;
  color: rgb(180, 180, 180);
`;

export const buttonEdit = css`
  width: 30%;
  padding: 3%;
  font-size: 20px;
  font-weight: 700;
  border-radius: 25px;
  border: none;
  background-color: rgba(159, 90, 253, 0.6);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 40%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 60%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 40%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 50%;
  }
`;
