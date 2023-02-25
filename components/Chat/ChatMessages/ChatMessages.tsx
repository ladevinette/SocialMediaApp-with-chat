import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import React, { useState, useContext, useEffect } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../firebase-config";
import ChatMessage from "../ChatMessage/ChatMessage";
import * as styles from "./ChatMessages.style";

export function ChatMessages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data) {
      const unSub = onSnapshot(
        doc(db, "chats", data.chatId),
        (doc: DocumentData) => {
          doc.exists() && setMessages(doc.data().messages);
        }
      );

      return () => {
        unSub();
      };
    }
  }, [data]);

  // messages.forEach((element) => console.log(element));

  return (
    <div css={styles.messages}>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
}

export default ChatMessages;
