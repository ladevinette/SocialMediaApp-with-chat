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
  background-color: rgb(207, 159, 255);
  width: 70%;
  gap: 10px;
  border-radius: 30px;
  padding: 1%;
`;

export const photoContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  width: 15%;
`;

export const contentContainer = css`
  width: 80%;
`;

export const commentPhotoEdit = css`
  width: 80%;
  height: 80%;
  border-radius: 100%;
`;

export const nameSurname = css`
  color: black;
  font-weight: 700;
  font-size: 15px;
  font-weight: 500;
`;

export const commentContentText = css`
  display: flex;
  text-align: center;
  align-items: center;
  width: 90%;
  height: 40px;
  background-color: white;
  padding: 1%;
  border-radius: 20px;
  border: 1px solid black;
  color: black;
  font-size: 14px;
`;

export const deleteButton = css`
  border: none;
  background: none;
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
`;
