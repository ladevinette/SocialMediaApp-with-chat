import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2%;
`;

export const commentWrapper = css`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 10px;
  width: 90%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const photoContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  width: 40px;
  height: 40px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 60px;
    height: 60px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 55px;
    height: 55px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

export const commentPhotoEdit = css`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 2px solid white;
`;

export const contentContainer = css`
  max-width: 80%;
  max-height: max-content;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    max-width: 70%;
  }
`;

export const nameSurname = css`
  color: black;
  font-weight: 700;
  font-size: 15px;
  font-weight: 500;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    font-size: 18px;
  }
`;

export const commentContentText = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1%;
  padding-left: 2%;
  padding-right: 10%;
  background-color: white;
  border-radius: 20px;
  color: black;
  font-size: 14px;
  max-width: 100%;
  overflow-wrap: break-word;
  min-height: 40px;
  border: none;
  font-weight: 500;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    font-size: 18px;
  }
`;

export const deleteButton = css`
  border: none;
  background: none;
  /* position: absolute;
  right: 10px;
  top: 5px; */
  cursor: pointer;
`;
