import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { getUser } from "../../features/users/usersSlice";
import EditIcon from "../../assets/svg/settings-2-svgrepo-com.svg";
import HomeIcon from "../../assets/svg/home-alt-svgrepo-com.svg";
import ChatIcon from "../../assets/svg/chat-round-svgrepo-com (1).svg";
import UserIcon from "../../assets/svg/user-svgrepo-com (1).svg";
import * as styles from "./Header.styles";

function Header() {
  const auth = getAuth();
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const { loggedUser } = useTypedSelector((state) => state.users);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user) {
      dispatch(getUser(user.uid));
    }
  }, [dispatch, user]);

  const onLogOut = () => {
    auth.signOut();
    router.push("/login");
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToEditProfile = () => {
    user ? router.push("/edit-profile") : router.push("/login");
    closeModal();
  };

  const goToHome = () => {
    user ? router.push("/homepage") : router.push("/login");
    closeModal();
  };

  const goToMyProfile = () => {
    user ? router.push(`/profile/${user?.uid}`) : router.push("/login");
    closeModal();
  };

  const goToChat = () => {
    user ? router.push("/chat") : router.push("/login");
    closeModal();
  };

  const openHamburger = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div css={styles.container}>
      <div css={styles.containerWrapper}>
        <Link href={"/homepage"} css={styles.leftWrapper} onClick={closeModal}>
          <h1>Social Media 🦄</h1>
        </Link>
        <div css={styles.centerWrapper}>
          <button css={styles.editButton} onClick={goToEditProfile}>
            <Image css={styles.editIcon} src={EditIcon} alt="" />
          </button>

          <button css={styles.editButton} onClick={goToHome}>
            <Image css={styles.editIcon} src={HomeIcon} alt="" />
          </button>

          <button css={styles.editButton} onClick={goToChat}>
            <Image css={styles.editIcon} src={ChatIcon} alt="" />
          </button>
        </div>
        {loggedUser && user && (
          <div css={styles.rightWrapper}>
            <Link href={`/profile/${user.uid}`} css={styles.photoHeaderWrapper}>
              <Image
                css={styles.editPhotoHeader}
                src={loggedUser.profileImg}
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <span css={styles.nameAndSurname}>
              {loggedUser.name} {loggedUser.surname}
            </span>
          </div>
        )}

        <div css={styles.burgerMenu} onClick={openHamburger}>
          <div css={isOpen ? styles.burgerBarClicked1 : styles.burgerBar}></div>
          <div css={isOpen ? styles.burgerBarClicked2 : styles.burgerBar}></div>
          <div css={isOpen ? styles.burgerBarClicked3 : styles.burgerBar}></div>
          <div></div>
        </div>

        <div css={isOpen ? styles.menuOpen : styles.menuClosed}>
          <div css={isOpen ? styles.menuWrapperOpen : styles.menuWrapperClosed}>
            <div css={styles.menuOpenItemsContainer}>
              <button onClick={goToHome} css={styles.menuOpenItemLink}>
                <Image css={styles.editMenuIcon} src={HomeIcon} alt="" />
                <span css={styles.menuDestination}>Home Page</span>
              </button>

              <button onClick={goToMyProfile} css={styles.menuOpenItemLink}>
                <Image css={styles.editMenuIcon} src={UserIcon} alt="" />
                <span css={styles.menuDestination}>My profile</span>
              </button>

              <button onClick={goToChat} css={styles.menuOpenItemLink}>
                <Image css={styles.editMenuIcon} src={ChatIcon} alt="" />
                <span css={styles.menuDestination}>Chat</span>
              </button>

              <button onClick={goToEditProfile} css={styles.menuOpenItemLink}>
                <Image css={styles.editMenuIcon} src={EditIcon} alt="" />
                <span css={styles.menuDestination}>Edit profile</span>
              </button>
            </div>
            <button onClick={onLogOut} css={styles.logOutButton}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
