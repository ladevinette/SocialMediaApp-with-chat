import { css } from "@emotion/react";

export const message = css`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 100%;
    font-size: 15px;
    gap: 5px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 100%;
    font-size: 15px;
    gap: 5px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    gap: 5px;
    width: 100%;
    font-size: 13px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 5px;
    width: 100%;
    font-size: 13px;
  }
`;

export const messageUser = css`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  margin-bottom: 20px;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    width: 100%;
    font-size: 15px;
    gap: 5px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 100%;
    font-size: 15px;
    gap: 5px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    gap: 5px;
    width: 100%;
    font-size: 13px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 5px;
    width: 100%;
    font-size: 13px;
  }
`;

export const messageInfo = css`
  display: flex;
  gap: 20px;
  flex-direction: column;
  color: gray;
  font-weight: 300;

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    font-size: 13px;
    gap: 8px;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    font-size: 12px;
    gap: 10px;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 12px;
    gap: 10px;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 10px;
    gap: 10px;
  }
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
