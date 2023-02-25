import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatContext } from "../../../context/ChatContext";
import ChatInput from "../ChatInput/ChatInput";
import ChatMessages from "../ChatMessages/ChatMessages";
import * as styles from "./ChatComponent.styles";

export function ChatComponent() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  const { data } = useContext(ChatContext);

  return (
    <div css={styles.chat}>
      <div css={styles.chatInfo}>
        {data && (
          <span>
            {data.user?.name} {data.user?.surname}
          </span>
        )}
      </div>
      <ChatMessages />
      <ChatInput />
    </div>
  );
}

export default ChatComponent;
