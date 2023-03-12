import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useAuthState } from "react-firebase-hooks/auth";
import * as styles from "./MainPage.styles";
import Image from "next/image";
import mainImage from "../../assets/pageImages/All the data-rafiki.png";
import smallImage from "../../assets/pageImages/Software code testing-amico.png";

export function MainPage() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const router = useRouter();

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
