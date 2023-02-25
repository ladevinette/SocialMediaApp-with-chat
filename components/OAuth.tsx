import Image from "next/image";
import React from "react";
import googleIcon from "../assets/svg/googleIcon.svg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { css } from "@emotion/css";
import app, { db } from "../firebase-config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";

const OAuth = () => {
  const router = useRouter();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name: user.displayName,
        surname: "",
        email: user.email,
        birthdate: "",
        timestamp: serverTimestamp(),
        profileImg:
          "https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000",
        description: "",
        instagram: "",
        snapchat: "",
        facebook: "",
        beReal: "",
        nationality: "",
        hobbies: "",
      });

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
        `}
        onClick={onGoogleClick}
      >
        <Image
          className={css`
            width: 50px;
            height: 50px;
          `}
          src={googleIcon}
          alt="Sign In With Google"
        />
      </button>
    </div>
  );
};

export default OAuth;
