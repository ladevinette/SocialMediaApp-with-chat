import React from "react";
import { css } from "@emotion/css";
import LogOutIcon from "../assets/svg/logout-svgrepo-com.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./Header.styles";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const auth = getAuth();
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const onLogOut = () => {
    auth.signOut();
    router.push("/login");
  };

  return (
    <div css={styles.container}>
      <div css={styles.containerWrapper}>
        <Link href="/login">Login</Link>
        <Link href="/homepage">Home</Link>
        <Link href="/edit-profile"> Edit Profile</Link>
        <Link href={`/profile/${user?.uid}`}>My Profile</Link>
        <Link href="/chat">Chat</Link>
      </div>
    </div>
  );
}

export default Header;
