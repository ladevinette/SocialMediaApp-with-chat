import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import * as styles from "./HomePage.style";
import { getAuth } from "firebase/auth";
import {
  formPostData,
  InputChangeEventHandler,
  Post,
  SliceType,
  TextAreaEventHandler,
  User,
} from "../../typing";
import { serverTimestamp } from "firebase/firestore";
import { createPost, getPosts } from "../../features/posts/postSlice";
import { db } from "../../firebase-config";
import { toast, ToastContainer } from "react-toastify";
import { PostItem } from "../PostItem/PostItem";
import { getUser, getUsers } from "../../features/users/usersSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import yourProfileImage from "../../assets/pageImages/Website Creator-amico.png";
import chatImage from "../../assets/pageImages/Multitasking-amico.png";
import usersImage from "../../assets/pageImages/Back to work-amico.png";
import { useRouter } from "next/router";
import { Login } from "../Login";
import Spinner from "../Spinner/Spinner";
// import io, { Socket } from "socket.io-client";

//problem wywalania uzytkownika mozemy rozwiazc dajac useEffect i funcke getUser lub zmianiajac na getAuth.currentUser!

export function HomePage() {
  const { loggedUser, users } = useTypedSelector((state) => state.users);
  const auth = getAuth();
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const [downloadURL, setDownloadURL] = useState("");
  const [progress, setProgressUpload] = useState(0);
  const dispatch = useAppDispatch();
  const [posty, setPosty] = useState<Post[]>([]);
  const [formData, setFormData] = useState<formPostData>({
    id: "",
    photoURL: "",
    postDescription: "",
    timestamp: serverTimestamp(),
    author: {
      authorId: "",
      name: "",
      surname: "",
      profileImg: "",
    },
  });
  // const [socket, setSocket] = useState<any | null>(null);

  const { posts, isLoading } = useTypedSelector((state) => state.posts);
  const { id, photoURL, postDescription, timestamp } = formData;
  const { authorId, name, surname, profileImg } = formData.author;
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const data: formPostData = {
    id,
    photoURL,
    postDescription,
    timestamp,
    author: {
      authorId,
      name,
      surname,
      profileImg,
    },
  };

  useEffect(() => {
    !user && router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(getUser(user.uid));
    }
  }, [dispatch, user]);

  if (isLoading || !loggedUser) {
    return <Spinner />;
  }

  const handleSelectedFile = (file: any) => {
    if (file) {
      setSelectedFile(file);
    } else {
      console.log("error while sending Image");
    }
  };

  const onChange: TextAreaEventHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      postDescription: e.target.value,
      id: uuidv4(),
      author: {
        authorId: loggedUser.id,
        name: loggedUser.name,
        surname: loggedUser.surname,
        profileImg: loggedUser.profileImg,
      },
    }));
  };

  const uploadPhoto = async () => {
    if (user) {
      const storeImage = async (image: File) => {
        return new Promise<string>((resolve, reject) => {
          const storage = getStorage();
          const fileName = `${user.uid}-${image.name}-${uuidv4()}`;
          console.log(fileName);
          const storageRef = ref(storage, "images/" + fileName);
          console.log("storage ref", storageRef);
          const uploadTask = uploadBytesResumable(storageRef, image);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgressUpload(progress);
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              reject(error);
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });
      };

      const imgUrls = await Promise.all(
        [...selectedFile].map((image) => storeImage(image))
      ).catch((err) => {
        return;
      });

      if (imgUrls && imgUrls.length > 0) {
        const updatedProfileImage = imgUrls[0];
        setFormData((prevState) => ({
          ...prevState,
          photoURL: updatedProfileImage,
        }));
      } else {
        console.log("Images not uploaded");
        toast.error("Please reload the page");
      }
    } else {
      console.log("something went wrong");
    }
  };

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(createPost(data));
    toast.success("You have just added post!");
  };

  const onLogOut = () => {
    auth.signOut();
    router.push("/");
  };

  return (
    <div css={styles.container}>
      <ToastContainer />
      <div css={styles.leftDiv}>
        <div css={styles.futuresContainer}>
          <div css={styles.futureTile}>
            <p css={styles.colorGray}>YOUR PROFILE</p>
            <button css={styles.tileButton}>
              <Link href={`/profile/${user?.uid}`}>My profile</Link>
            </button>

            <Image css={styles.editTilePhoto} src={yourProfileImage} alt="" />
          </div>

          <div css={styles.futureTile}>
            <p css={styles.colorGray}>LETS TRY OUR NEW FEATURE</p>
            <button css={styles.tileButton}>
              <Link href="/chat">Chat</Link>
            </button>
            <Image css={styles.editTilePhoto} src={chatImage} alt="" />
          </div>

          <div css={styles.logOutButton} onClick={onLogOut}>
            Log out
          </div>
        </div>
      </div>
      <div css={styles.containerWrapper}>
        <div css={styles.divTop}>
          <div css={styles.addPostContainer}>
            <form
              css={styles.editForm}
              onSubmit={onSubmit}
              className={css`
                color: black;
              `}
            >
              <p css={styles.addPostHeader}>UPLOAD YOUR POST</p>
              <div css={styles.inputContainer}>
                <input
                  css={styles.editInputFile}
                  className="formInputFile"
                  type="file"
                  id="updateProfileImg"
                  max="1"
                  accept=".jpg,.png,.jpeg"
                  onChange={(file) => handleSelectedFile(file.target.files)}
                  multiple
                  required
                />
                <div css={styles.plusButtton} onClick={uploadPhoto}>
                  +
                </div>
              </div>

              {formData.photoURL && (
                <Image
                  css={styles.editUploadImg}
                  src={formData.photoURL}
                  height={100}
                  width={100}
                  alt="elo"
                />
              )}
              <div css={styles.textAreaDiv}>
                <textarea
                  id="postDescription"
                  onChange={onChange}
                  css={styles.textArea}
                />
              </div>
              <button css={styles.submitButton} type="submit">
                SUBMIT
              </button>
            </form>
          </div>

          <div css={styles.bottomWrapper}>
            {posts &&
              posts.map((element) => (
                <div css={styles.postContainer} key={element.id + 1}>
                  <PostItem post={element} />
                </div>
              ))}
            {!posts && <div>Calm here.. So add some posts!</div>}
          </div>
        </div>
      </div>
      <div css={styles.rightDiv}>
        <div css={styles.rightDivContentWrapper}>
          <p css={styles.rightDivHeader}>RECENLY JOINED TO US</p>
          {users &&
            users.map((element) => (
              <Link
                href={`/profile/${element.id}`}
                css={styles.userContainer}
                key={element.id}
              >
                <div css={styles.userProf}>
                  <Image
                    css={styles.editProfPhoto}
                    src={element.profileImg}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <span css={styles.editNameSurname}>
                  {element.name} {element.surname}
                </span>
                <span css={styles.dateEdit}>
                  {element.timestamp.toDate().toLocaleDateString()}
                </span>
              </Link>
            ))}
          <div css={styles.rightDivBottom}>
            <Image css={styles.editTilePhoto} src={usersImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
