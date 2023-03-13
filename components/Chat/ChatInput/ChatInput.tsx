import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { InputChangeEventHandler } from "../../../typing";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-config";
import { uuidv4 } from "@firebase/util";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { getUsers } from "../../../features/users/usersSlice";
import { useChatSocket } from "../../../hooks/useChatSocket";
import "react-toastify/dist/ReactToastify.css";
import * as styles from "./ChatInput.style";
import photo from "../../../assets/svg/photo-4-svgrepo-com.svg";

const ChatInput = () => {
  const { data } = useContext(ChatContext);
  const { loggedUser, users } = useTypedSelector((state) => state.users);
  const [text, setText] = useState("");
  const [img, setImg] = useState<File[] | null>(null);
  const [progressUpload, setProgressUpload] = useState(0);
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const { socket, connected, error: socketError } = useChatSocket();

  // useEffect(() => {
  //   if (loggedUser) {
  //     const socketData = {
  //       name: loggedUser.name,
  //       surname: loggedUser.surname,
  //       id: loggedUser.id,
  //     };
  //     socket.emit("newUser", socketData);
  //   }
  // }, [socket, loggedUser]);

  // useEffect(() => {
  //   socket.on("getNotification", (data) => {
  //     toast("🦄 You have got a new message!", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   });
  // }, [socket]);

  const onChange: InputChangeEventHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, [user]);

  const handleSelectedFile = (file: any) => {
    if (file) {
      setImg(file);
    } else {
      console.log("error while sending Image");
    }
  };

  const handleNotification = () => {
    if (data && user && data.user) {
      socket.emit("sendNotification", {
        reciverId: data.user.id,
      });
    }
  };

  const handleSend = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (img && data && loggedUser && data.user.id) {
      const storeImage = async (image: File) => {
        return new Promise<string>((resolve, reject) => {
          const storage = getStorage();
          const fileName = `${loggedUser.id}-${image.name}-${uuidv4()}`;
          const storageRef = ref(storage, "images/" + fileName);
          const uploadTask = uploadBytesResumable(storageRef, image);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(progress);
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
        [...img].map((image) => storeImage(image))
      ).catch(() => {
        console.log("Images not uploaded");
        return;
      });

      if (imgUrls) {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuidv4(),
            text,
            senderId: loggedUser.id,
            date: Timestamp.now(),
            img: imgUrls[0],
          }),
        });
      }
    } else {
      if (data?.user && data.chatId && loggedUser && user && text) {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuidv4(),
            text,
            senderId: loggedUser.id,
            date: Timestamp.now(),
          }),
        });

        await updateDoc(doc(db, "userChats", loggedUser.id), {
          [data.chatId + ".lastMessage"]: {
            text,
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.id), {
          [data.chatId + ".lastMessage"]: {
            text,
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
      }
    }
    handleNotification();
    setText("");
    setImg(null);
  };

  return (
    <div css={styles.input}>
      <ToastContainer />
      <form onSubmit={handleSend} css={styles.form}>
        <input
          css={styles.editInput}
          type="text"
          placeholder="Type something..."
          onChange={onChange}
          value={text}
        />
        <div css={styles.send}>
          <label>
            <Image
              css={styles.editImg}
              src={photo}
              alt="image"
              width={100}
              height={100}
            />
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              onChange={(file) => handleSelectedFile(file.target.files)}
            />
          </label>
          <button type="submit" css={styles.editBtn}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
