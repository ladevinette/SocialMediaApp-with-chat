import React, { useEffect, useRef, useState, useCallback } from "react";
import { css } from "@emotion/css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import { formPostData, Post, TextAreaEventHandler } from "../../typing";
import { doc, getDoc, serverTimestamp } from "firebase/firestore";
import {
  createPost,
  fetchMorePosts,
  getPosts,
} from "../../features/posts/postSlice";
import { db } from "../../firebase-config";
import { toast, ToastContainer } from "react-toastify";
import { PostItem } from "../PostItem/PostItem";
import { getUser, getUsers } from "../../features/users/usersSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { useChatSocket } from "../../hooks/useChatSocket";
import * as styles from "./HomePage.style";
import "react-toastify/dist/ReactToastify.css";
import yourProfileImage from "../../assets/pageImages/Website Creator-amico.png";
import chatImage from "../../assets/pageImages/Multitasking-amico.png";
import usersImage from "../../assets/pageImages/Back to work-amico.png";

export function HomePage() {
  const { loggedUser, users } = useTypedSelector((state) => state.users);
  const auth = getAuth();
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const [progress, setProgressUpload] = useState(0);
  const dispatch = useAppDispatch();
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
  const { posts } = useTypedSelector((state) => state.posts);
  const { id, photoURL, postDescription, timestamp } = formData;
  const { authorId, name, surname, profileImg } = formData.author;
  const [user] = useAuthState(auth);
  const [lastFetchedPost, setLastFetchedPost] = useState<Post>();
  const { socket, error: socketError } = useChatSocket();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
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
    if (loggedUser) {
      const socketData = {
        name: loggedUser.name,
        surname: loggedUser.surname,
        id: loggedUser.id,
      };
      socket.emit("newUser", socketData);
    }
  }, [socket, loggedUser]);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      toast("🦄 You have got a new message!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }, [socket]);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (posts) {
      const lastVisible = posts[posts.length - 1];
      setLastFetchedPost(lastVisible);
    }
  }, [posts]);

  useEffect(() => {
    if (user) {
      dispatch(getUser(user.uid));
    }
  }, [dispatch, user]);

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
    setFormData({
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
    handleClearFile();
  };

  const onLogOut = () => {
    auth.signOut();
    router.push("/login");
  };

  const handleClick = async () => {
    const postRef = doc(db, "posts", lastFetchedPost.id);
    const postSnap = await getDoc(postRef);
    await dispatch(fetchMorePosts(postSnap));
  };

  const handleClearFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
            <p css={styles.colorGray}>
              LETS TRY OUR NEW FEATURE CHAT WITH REALTIME NOTIFICATIONS
            </p>
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
        <div id="my-container" css={styles.divTop}>
          {posts && (
            <InfiniteScroll
              css={styles.infiniteScroll}
              dataLength={posts.length}
              next={handleClick}
              hasMore={true}
              loader={<p></p>}
              endMessage={<p>You scrolled through all posts</p>}
              scrollableTarget="my-container"
            >
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
                      ref={fileInputRef}
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
                      maxLength={150}
                      value={postDescription}
                      required
                    />
                  </div>
                  <button css={styles.submitButton} type="submit">
                    SUBMIT
                  </button>
                </form>
              </div>

              <div css={styles.bottomWrapper}>
                {posts.map((element, index) => (
                  <div css={styles.postContainer} key={index}>
                    <PostItem post={element} />
                  </div>
                ))}

                {!posts && <div>Calm here.. So add some posts!</div>}
              </div>
            </InfiniteScroll>
          )}
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
          <div css={styles.userRightDivBottom}>
            <Image css={styles.editRightPhoto} src={usersImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
