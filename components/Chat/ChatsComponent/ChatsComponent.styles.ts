import { css } from "@emotion/react";

export const chats = css`
  position: absolute;
  top: 20px;
  right: 10px;
  height: 50px;
  width: 40%;
  border-top-left-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(159, 90, 253, 0.6);
`;

export const userChat = css`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const imageContainer = css`
  width: 50px;
  height: 50px;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 45px;
    height: 45px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

export const editImage = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const infoContainer = css`
  width: 60%;
`;

export const editName = css`
  font-size: 18px;
  font-weight: 500;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 14px;
    font-weight: 700;
    width: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
  }
`;

export const editMessage = css`
  font-size: 14px;
  color: lightgrey;

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 10px;
  }
`;
