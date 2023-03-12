import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg";
import * as styles from "./SignUp.styles";

type Inputs = {
  name: string;
  surname: string;
  nickname: string;
  email: string;
  password: string;
  birthdate: Date;
};

export function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, surname, email, password, birthdate } = data;

    try {
      console.log(name, surname, email, password, birthdate);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (!auth.currentUser) {
        return;
      } else {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      await setDoc(doc(db, "users", user.uid), {
        id: auth.currentUser.uid,
        name: name,
        surname: surname,
        email: email,
        birthdate: birthdate,
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

      await setDoc(doc(db, "userChats", user.uid), {});

      toast.success("Succesfully Sign up!");
      router.push("/homepage");
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.wrapper}>
        <div css={styles.header}>
          <span css={styles.headerText}>Lets join us!</span>
          <span>It is simply and fast</span>
        </div>
        <form css={styles.editForm} onSubmit={handleSubmit(onSubmit)}>
          <div css={styles.formContainer}>
            <div css={styles.formWrapper}>
              <div css={styles.firstRowInputContainer}>
                <input
                  css={styles.nameInput}
                  type="name"
                  placeholder="Please enter your name"
                  {...register("name", { required: true })}
                />

                <input
                  css={styles.surnameInput}
                  type="surname"
                  placeholder="Please enter your surname"
                  {...register("surname", { required: true })}
                />
              </div>

              <input
                css={styles.editInput}
                type="email"
                placeholder="Please enter your email adress"
                {...register("email", { required: true })}
              />

              <div css={styles.secondRowInputContainer}>
                <input
                  css={styles.passwordInput}
                  type={showPassword ? "text" : "password"}
                  placeholder="Please enter your password"
                  autoComplete="off"
                  {...register("password", { required: true })}
                />

                <Image
                  css={styles.visibilityIcon}
                  src={visibilityIcon}
                  alt="show password"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>

              <div css={styles.dateContainer}>
                <span css={styles.dateHeader}>Birth date:</span>
                <input
                  css={styles.editDateInput}
                  type="date"
                  autoComplete="off"
                  {...register("birthdate", { required: true })}
                />
              </div>
            </div>
            <div css={styles.bottomContainer}>
              <button css={styles.signInButton} type="submit">
                <span css={styles.buttonText}>Create your account</span>
              </button>

              <div css={styles.insteadDiv}>
                <div>
                  <Link css={styles.editLink} href="/login">
                    Sign In Instead
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
