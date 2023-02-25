import { css } from "@emotion/react";

export const message = css`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const messageUser = css`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  margin-bottom: 20px;
`;

export const messageInfo = css`
  display: flex;
  gap: 20px;
  flex-direction: column;
  color: gray;
  font-weight: 300;
`;

export const editLeftImg = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const editRightImg = css`
  width: 70%;
`;

export const messageContentUser = css`
  max-width: 80%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const messageContentSender = css`
  max-width: 80%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const editMessageDivUser = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px 10px 0px 10px;
  max-width: max-content;
`;

export const editMessageDivSender = css`
  background-color: white;
  padding: 10px 20px;
  border-radius: 0px 10px 10px 10px;
  max-width: max-content;
`;
