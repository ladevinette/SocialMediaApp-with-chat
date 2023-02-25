import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: black;
`;

export const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 90%;
  }
`;

export const socialsContainer = css`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 30%;
  border-radius: 15px;
  background-color: rgb(207, 159, 255);
  padding: 1%;
  border-radius: 15px;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    height: 40%;
    padding: 0%;
  }
`;

export const photoContainer = css`
  width: 40%;
  height: 100%;
`;

export const editPicture = css`
  width: 100%;
  height: 100%;
`;

export const rightSocialContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

export const social = css`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 80%;
  height: 40px;
  border-radius: 30px;
`;

export const iconContainer = css`
  padding: 3%;
  width: 20%;
`;

export const editIcon = css`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const editSocialName = css`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;

export const descriptionContainer = css`
  display: flex;
  background-color: rgb(207, 159, 255);
  width: 80%;
  height: 20%;
  border-radius: 15px;

  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    height: 30%;
    padding: 0%;
  }
`;

export const rightDescription = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

export const descriptionHeader = css`
  text-align: center;
  font-size: 20px;
  padding: 2%;
  color: gray;
  font-weight: 700;
`;

export const description = css`
  text-align: center;
  width: 80%;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export const hobbiesContainer = css`
  display: flex;
  background-color: rgb(207, 159, 255);
  width: 80%;
  height: 20%;
  border-radius: 15px;

  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    height: 25%;
    padding: 0%;
  }
`;
