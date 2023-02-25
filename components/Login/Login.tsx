import React, { useState } from "react";
import { css } from "@emotion/css";
import { useForm, SubmitHandler } from "react-hook-form";
import OAuth from "../OAuth";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg";
import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "../../assets/svg/keyboardArrowRightIcon.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SignUpWithTwitter from "../TwitterSignUp";
import SignUpWithFacebook from "../FacebookSignUp";
import Router, { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as styles from "./Login.styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { HomePage } from "../HomePage";

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const router = useRouter();
  const auth = getAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      console.log(email, password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        router.push("/");
        toast.success("Succesfully logged in!");
      }
    } catch (error: any) {
      toast.error("bad user credentilas");
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.containerWrapper}>
        <form css={styles.loginContainer} onSubmit={handleSubmit(onSubmit)}>
          <h1 css={styles.header}>LOGIN BELOW</h1>

          <div css={styles.inputsContainer}>
            <div css={styles.inputsWrapper}>
              <input
                css={styles.emailEdit}
                type="email"
                placeholder="Please enter your email adress"
                {...register("email", { required: true })}
              />

              <div css={styles.passwordInputWrapper}>
                <input
                  css={styles.editPasswordInput}
                  type={showPassword ? "text" : "password"}
                  placeholder="Please enter your password"
                  autoComplete="off"
                  {...register("password", { required: true })}
                />

                {errors.email && <span>This field is required</span>}

                <Image
                  css={styles.visibilityIcon}
                  src={visibilityIcon}
                  alt="show password"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>

              {errors.password && <span>This field is required</span>}
            </div>

            <div css={styles.logginButtonContainer}>
              <button css={styles.editLogginButton} type="submit">
                LOG IN
              </button>
            </div>
          </div>
        </form>

        <div css={styles.bottomContainer}>
          <div css={styles.bottomWrapper}>
            <div css={styles.bottomTextDiv}>
              <span
                css={styles.bottomText}
                className={css`
                  font-size: 20px;
                  font-weight: 500;
                `}
              >
                You dont have an account? <br /> Lets create it! And join to our
                community
              </span>
            </div>
            <div>
              <Link css={styles.createProfileDiv} href="/signup">
                Create your profile
                <div css={styles.arrayDiv}>
                  <Image
                    css={styles.editArrayImg}
                    src={ArrowRightIcon}
                    alt="Sign In With Google"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <span css={styles.forgotPasswordSpan}>
          <Link href="/forgot-password">
            <span css={styles.forgotPasswordText}>Forgot Password?</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
