import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { message } from "../../../typing";
import * as styles from "./ChatMessage.style";

type Props = {
  message: message;
};

export function ChatMessage({ message }: Props) {
  const { data } = useContext(ChatContext);
  const { loggedUser } = useTypedSelector((state) => state.users);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  if (data?.user && loggedUser && message) {
    return (
      <div
        ref={ref}
        css={
          message.senderId === loggedUser.id
            ? styles.messageUser
            : styles.message
        }
      >
        <div css={styles.messageInfo}>
          <Image
            css={styles.editLeftImg}
            src={
              message.senderId === loggedUser.id
                ? loggedUser.profileImg
                : data.user.profileImg
            }
            alt="profpic"
            width={100}
            height={100}
          />
          <span>{message.date.toDate().toLocaleTimeString()}</span>
        </div>
        <div
          css={
            message.senderId === loggedUser.id
              ? styles.messageContentUser
              : styles.messageContentSender
          }
        >
          <div
            css={
              message.senderId === loggedUser.id
                ? styles.editMessageDivUser
                : styles.editMessageDivSender
            }
          >
            {message.text}
            {message.img && (
              <Image
                css={styles.editRightImg}
                src={message.img}
                alt="profpic"
                width={200}
                height={200}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
  return <span>Something went wrong</span>;
}

export default ChatMessage;
