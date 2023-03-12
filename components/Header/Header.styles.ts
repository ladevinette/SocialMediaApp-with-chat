import { css } from "@emotion/react";

export const container = css`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(207, 159, 255);
  z-index: 1;
  height: 70px;
  overflow: hidden;

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    width: 100%;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: 100%;
    font-size: 14px;
  }
`;

export const containerWrapper = css`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  width: 100%;
`;

export const editButton = css`
  width: 90px;
  height: 40px;
  background: none;
  border: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const editIcon = css`
  width: 100%;
  height: 100%;
`;

export const leftWrapper = css``;

export const centerWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    display: none;
  }

  //xs-size
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`;

export const rightWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
    }
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

export const nameAndSurname = css`
  font-weight: 700;
  font-size: 15px;
`;

export const photoHeaderWrapper = css`
  width: 40px;
  height: 40px;
`;

export const editPhotoHeader = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid white;
`;

export const burgerMenu = css`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  padding: 2%;

  //xl-size
  @media (min-width: 1536px) {
    display: none;
  }

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    display: none;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    display: none;
  }

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    padding: 1%;
  }
`;

export const burgerBar = css`
  width: 100%;
  height: 6px;
  background-color: white;
  border-radius: 0.5em;

  //sm-size
  @media (min-width: 600px) and (max-width: 900px) {
    height: 9px;
  }
`;

export const burgerBarClicked1 = css`
  width: 100%;
  height: 6px;
  background-color: white;
  border-radius: 0.5em;
  :nth-of-type(1) {
    transform: translateY(15px) rotate(45deg);
  }
`;

export const burgerBarClicked2 = css`
  width: 100%;
  height: 6px;
  background-color: white;
  border-radius: 0.5em;
  :nth-of-type(2) {
    opacity: 0;
  }
`;

export const burgerBarClicked3 = css`
  width: 100%;
  height: 6px;
  background-color: white;
  border-radius: 0.5em;
  :nth-of-type(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
`;

export const menuOpen = css`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 68px;
  right: 0;
  z-index: 2;
  animation: slide-in 0.5s forwards;

  @keyframes slide-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  //xl-size
  @media (min-width: 1536px) {
    display: none;
  }

  //lg-size
  @media (min-width: 1200px) and (max-width: 1536px) {
    display: none;
  }

  //md-size
  @media (min-width: 900px) and (max-width: 1200px) {
    display: none;
  }
`;

export const menuWrapperOpen = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 80%;
  font-size: 20px;
`;

export const menuOpenItemsContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;

export const menuOpenItemLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(207, 159, 255);
  padding: 3%;
  border-radius: 15px;
  width: 100%;
  border: none;
`;

export const editMenuIcon = css`
  height: 30px;
  width: 30px;
`;

export const menuClosed = css`
  display: flex;
  width: 40%;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 68px;
  right: 0;
  z-index: 2;
  animation: slide-out 0.5s forwards;

  @keyframes slide-out {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

export const menuWrapperClosed = css`
  display: none;
  background-color: blue;
  width: 60%;
`;

export const logOutButton = css`
  background-color: lightgreen;
  border: none;
  font-size: 20px;
  padding: 4%;
  border-radius: 15px;
`;

export const menuDestination = css`
  font-weight: 700;
`;
