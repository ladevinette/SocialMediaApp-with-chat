import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { InputChangeEventHandler, TextAreaEventHandler } from "../../typing";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as styles from "./ForgotPassword.styles";
import ArrowRightIcon from "../../assets/svg/keyboardArrowRightIcon.svg";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange: InputChangeEventHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was send");
    } catch (error) {
      toast.error("Could not send reset email");
    }
    setEmail("");
  };

  return (
    <div css={styles.container}>
      <ToastContainer />
      <div css={styles.wrapper}>
        <div css={styles.emailContainer}>
          <form onSubmit={onSubmit} css={styles.form}>
            <input
              css={styles.editPasswordInput}
              placeholder="Type your email adress"
              onChange={onChange}
              value={email}
            />

            <div css={styles.sendResetLink}>
              <span css={styles.text}>Send reset Link</span>

              <button type="submit" css={styles.button}>
                <Image css={styles.editArrayImg} src={ArrowRightIcon} alt="" />
              </button>
            </div>
          </form>

          <Link href="/login">
            <span css={styles.login}>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
