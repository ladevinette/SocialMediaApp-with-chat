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
  cursor: pointer;
`;

export const editImage = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const editName = css`
  font-size: 18px;
  font-weight: 500;
`;

export const editMessage = css`
  font-size: 14px;
  color: lightgrey;
`;
