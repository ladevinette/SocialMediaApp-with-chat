import React from "react";
import { User } from "../../typing";
import * as styles from "./UserInfo.styles";
import socialMedia from "../../assets/pageImages/Remote team-amico.png";
import Image from "next/image";
import facebookIcon from "../../assets/svg/facebook-color-svgrepo-com.svg";
import beRealIcon from "../../assets/svg/bereal-icon.svg";
import instagramIcon from "../../assets/svg/instagram-1-svgrepo-com.svg";
import snapchatIcon from "../../assets/svg/snapchat-svgrepo-com.svg";
import descriptionIcon from "../../assets/pageImages/Ambassador-amico.png";
import hobbiesIcon from "../../assets/pageImages/Next steps-amico.png";

type Props = {
  user: User;
};

export function UserInfo({ user }: Props) {
  return (
    <div css={styles.container}>
      <div css={styles.wrapper}>
        <div css={styles.socialsContainer}>
          <div css={styles.photoContainer}>
            <Image
              css={styles.editPicture}
              src={socialMedia}
              alt="profileImage"
            />
          </div>
          <div css={styles.rightSocialContainer}>
            <div css={styles.social}>
              <div css={styles.iconContainer}>
                <Image
                  css={styles.editIcon}
                  src={facebookIcon}
                  alt="profileImage"
                />
              </div>
              <span css={styles.editSocialName}>{user.facebook}</span>
            </div>

            <div css={styles.social}>
              <div css={styles.iconContainer}>
                <Image
                  css={styles.editIcon}
                  src={instagramIcon}
                  alt="profileImage"
                />
              </div>
              <span css={styles.editSocialName}>{user.instagram}</span>
            </div>

            <div css={styles.social}>
              <div css={styles.iconContainer}>
                <Image
                  css={styles.editIcon}
                  src={snapchatIcon}
                  alt="profileImage"
                />
              </div>
              <span css={styles.editSocialName}>{user.snapchat}</span>
            </div>

            <div css={styles.social}>
              <div css={styles.iconContainer}>
                <Image
                  css={styles.editIcon}
                  src={beRealIcon}
                  alt="profileImage"
                />
              </div>
              <span css={styles.editSocialName}>{user.beReal}</span>
            </div>
          </div>
        </div>

        <div css={styles.descriptionContainer}>
          <div css={styles.photoContainer}>
            <Image
              css={styles.editPicture}
              src={descriptionIcon}
              alt="profileImage"
            />
          </div>
          <div css={styles.rightDescription}>
            <p css={styles.descriptionHeader}>DESCRIPTION</p>
            <span css={styles.description}>{user.description}</span>
          </div>
        </div>

        <div css={styles.hobbiesContainer}>
          <div css={styles.photoContainerHobby}>
            <Image
              css={styles.editPictureHobby}
              src={hobbiesIcon}
              alt="profileImage"
            />
          </div>
          <div css={styles.rightDescription}>
            <p css={styles.descriptionHeader}>HOBBIES</p>
            <span css={styles.description}>{user.hobbies}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
