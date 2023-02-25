import React, { useState, useEffect } from "react";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router, { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { css } from "@emotion/css";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { Login } from "../Login/index";
import { useAuthState } from "react-firebase-hooks/auth";
import * as styles from "./MainPage.styles";
import Image from "next/image";
import smartphoneImage from "../../assets/pageImages/933-9331109_like-comment-share-check-in-reviews-mentions-and.png";
import content from "../../assets/pageImages/content.png";
import mainImage from "../../assets/pageImages/All the data-rafiki.png";
import smallImage from "../../assets/pageImages/Software code testing-amico.png";
import Link from "next/link";

export function MainPage() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const { loggedIn, checkingStatus } = useAuthStatus();

  const handleClick = () => {
    user ? router.push("/homepage") : router.push("/login");
  };

  return (
    <div css={styles.container}>
      <div css={styles.leftSideContainer}>
        <div css={styles.leftSideWrapper}>
          <div css={styles.leftTop}>
            <h1 css={styles.header}>SOCIAL MEDIA</h1>
            <div css={styles.paragraphDiv}>
              <p css={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tortor lectus, tincidunt in leo quis, blandit mattis quam.
                Phasellus fermentum dui at nisl porta condimentum. Praesent
              </p>
            </div>
          </div>
          <div css={styles.leftCenter}>
            <div css={styles.leftCenterPhotoContainer}>
              <Image css={styles.photoEdit} src={smallImage} alt="image" />
            </div>
          </div>
          <div css={styles.leftBottom}>
            <button css={styles.buttonEdit} onClick={handleClick}>
              Get started
            </button>
          </div>
        </div>
      </div>
      <div css={styles.rightSideContainer}>
        <div css={styles.rightSideWrapper}>
          <Image css={styles.photoEdit} src={mainImage} alt="image" />
        </div>
      </div>
    </div>
  );
}
