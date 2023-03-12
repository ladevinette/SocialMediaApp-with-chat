import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  /* background-color: rgba(102, 51, 153, 0.9); */
  border-radius: 25px;
  height: 550px;
  width: 600px;
  margin-top: 40px;
  background-color: rgb(207, 159, 255);
  box-shadow: 0 2px 15px rgb(0 0 0 / 48%);

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 570px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 500px;
    height: 500px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 550px;
    height: 530px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    height: 400px;
    width: 350px;
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
`;

export const descContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  margin: auto;
  max-height: max-content;
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
  margin-left: 2%;
  margin-right: 1%;
  height: 100%;
`;

export const profileImgBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;

export const editProfileImg = css`
  border-radius: 100%;
  border: 2px solid gray;
  width: 100%;
  height: 100%;
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
  color: white;

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
  height: 80%;
  margin: auto;
  margin-top: 8%;
  overflow: auto;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 65%;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 65%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    margin-top: 25%;
    width: 80%;
  }
`;

export const modalHeader = css`
  width: 100%;
  padding: 2%;
  background-color: rgb(207, 159, 255);
  position: relative;
  height: 60px;
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
  width: 100%;
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
  gap: 10px;
  align-items: center;
  padding: 2%;
  width: 100%;
  border-radius: 50px;
`;

export const addCommentPhotoContainer = css`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 70px;
    height: 70px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 65px;
    height: 65px;
  }
`;

export const addCommentPhotoEdit = css`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 2px solid white;
`;

export const editInputContainer = css`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const editInput = css`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  color: black;
  border: 2px solid white;
  outline: none;
  padding: 3%;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    height: 65px;
    font-size: 18px;
  }
`;

export const addCommentButton = css`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  font-size: 50px;
  cursor: pointer;
`;

export const deleteButton = css`
  border: none;
  background: none;
  margin-right: 2%;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const postDescription = css`
  padding: 1%;
  font-size: 13px;
  text-align: center;
  font-weight: 700;
  color: gray;
`;

export const commentButtonDiv = css`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const editCommentButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  gap: 5px;
  width: 40%;
  background: none;
  border: none;
  border-radius: 25px;
  padding: 1% 0% 1% 0%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;
