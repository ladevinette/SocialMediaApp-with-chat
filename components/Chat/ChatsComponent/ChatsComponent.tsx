import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../firebase-config";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { userChats, userInfo } from "../../../typing";
import { v4 as uuidv4 } from "uuid";
import * as styles from "./ChatsComponent.styles";

export function ChatsComponent() {
  const [chats, setChats] = useState<userChats[]>([]);
  const { loggedUser } = useTypedSelector((state) => state.users);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (loggedUser) {
      const unsub = onSnapshot(
        doc(db, "userChats", loggedUser.id),
        (doc: DocumentData) => {
          setChats(doc.data());
        }
      );

      return () => {
        unsub();
      };
    }
  }, [loggedUser]);

  const handleSelect = (user: userInfo) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div>
      {Object.entries(chats)?.map((chat) => (
        <div
          css={styles.userChat}
          key={uuidv4()}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <div css={styles.imageContainer}>
            <Image
              css={styles.editImage}
              src={chat[1].userInfo.profileImg}
              alt="profpic"
              width={100}
              height={100}
            />
          </div>

          <div css={styles.infoContainer}>
            <span css={styles.editName}>
              {chat[1].userInfo.name} {chat[1].userInfo.surname}
            </span>
            <p css={styles.editMessage}>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatsComponent;
