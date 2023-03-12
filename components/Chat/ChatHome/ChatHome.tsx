import React from "react";
import { ChatComponent } from "../ChatComponent/ChatComponent";
import ChatSidebar from "../ChatSidebar/ChatSidebar";
import * as styles from "./ChatHome.styles";

export function ChatHome() {
  return (
    <div css={styles.home}>
      <div css={styles.container}>
        <ChatSidebar />
        <ChatComponent />
      </div>
    </div>
  );
}

export default ChatHome;
