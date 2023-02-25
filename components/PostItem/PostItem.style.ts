import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  background-color: rgba(102, 51, 153, 0.9);
  border-radius: 15px;
  height: 500px;
  width: 100%;
  margin-top: 40px;
  background-color: rgba(159, 90, 253, 0.4);
  border: 3px solid rgb(207, 159, 255);

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    height: 350px;
  }
`;

export const link = css`
  display: flex;
  width: 100%;
  height: 10%;
`;

export const authorInfo = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const photoContainer = css`
  height: 75%;
  width: 100%;
  background-color: blue;
`;

export const descContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  height: 20%;
  color: black;
  /* background-color: rgba(102, 51, 153, 0.9); */
  border-radius: 0px 0px 15px 15px;

  font-size: 20px;
  font-weight: 500;
`;

export const editPostPhoto = css`
  width: 100%;
  height: 100%;
`;
export const authorLeftSide = css`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 3%; */
  width: 20%;
  height: 100%;
`;

export const profileImgBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  height: 100%;
  width: 70%;
`;

export const editProfileImg = css`
  border-radius: 50%;
  width: 80%;
  height: 80%;
`;

export const authorRightSide = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const nameAndSurname = css`
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  text-align: left;
  color: black;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const colorBlack = css`
  display: flex;
  width: 100%;
  background-color: blue;
  justify-content: center;
  color: black;
`;

export const editModal = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(203, 195, 227);
  width: 50%;
  height: 90%;
  margin: auto;
  margin-top: 2%;
  overflow: auto;
`;

export const modalHeader = css`
  width: 100%;
  padding: 2%;
  background-color: rgb(207, 159, 255);
  position: relative;
`;

export const modalHeaderText = css`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const closeButton = css`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const postContainer = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const commentsSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  border-top: 1px solid gray;
`;

export const editForm = css`
  width: 100%;
  padding: 2%;
`;

export const addCommentContainer = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const addCommentWrapper = css`
  display: flex;
  justify-content: center;
  padding: 2%;
  width: 70%;
  background-color: rgb(207, 159, 255);
  border-radius: 50px;
`;

export const addCommentPhotoContainer = css`
  display: flex;
  justify-content: center;
  width: 17%;
`;

export const addCommentPhotoEdit = css`
  width: 80%;
  height: 100%;
  border-radius: 100%;
`;

export const editInputContainer = css`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const editInput = css`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  border: none;
  color: black;
`;

export const addCommentButton = css`
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;
`;

export const deleteButton = css`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 2%;
`;

export const postDescription = css`
  padding: 1%;
  font-size: 13px;
`;

export const editCommentButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  gap: 5px;
  border: none;
  background: none;
  color: black;
  cursor: pointer;
`;
