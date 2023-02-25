import Image from "next/image";
import React from "react";
import googleIcon from "../assets/svg/googleIcon.svg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { css } from "@emotion/css";
import app from "../firebase-config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import facebookIcon from "../assets/svg/facebook-color-svgrepo-com.svg";

const SignUpWithFacebook = () => {
  const router = useRouter();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success("Sucesfully logged in with Google");
      router.push("/");
    } catch (error: any) {
      console.log("Could not authorize with Google ");
      console.log(error.message);
    }
  };

  return (
    <div>
      <button
        className={css`
          background: none;
          border: none;
          width: 60px;
          height: 60px;
        `}
        onClick={onGoogleClick}
      >
        <Image
          className={css`
            width: 50px;
            height: 50px;
          `}
          src={facebookIcon}
          alt="Sign In With Facebook"
        />
      </button>
    </div>
  );
};

export default SignUpWithFacebook;