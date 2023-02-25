import React from "react";
import ChatComponent from "../ChatComponent/ChatComponent";
import ChatNavbar from "../ChatNavbar/ChatNavbar";
import ChatsComponent from "../ChatsComponent/ChatsComponent";
import ChatSearch from "../ChatSearch/ChatSearch";
import * as styles from "./ChatSidebar.styles";

const ChatSidebar = () => {
  return (
    <div css={styles.sidebar}>
      <ChatNavbar />
      <ChatSearch />
      <ChatsComponent />
    </div>
  );
};

export default ChatSidebar;
