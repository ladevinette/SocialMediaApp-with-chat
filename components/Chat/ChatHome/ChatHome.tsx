import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUser } from "../../../features/users/usersSlice";
import {
  useAppDispatch,
  useTypedSelector,
} from "../../../hooks/useTypedSelector";
import { Login } from "../../Login";
import { ChatComponent } from "../ChatComponent/ChatComponent";
import { user } from "../ChatNavbar/ChatNavbar.styles";
import Chatcomponent from "../ChatsComponent/ChatsComponent";
import ChatSidebar from "../ChatSidebar/ChatSidebar";
import * as styles from "./ChatHome.styles";

export function ChatHome() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  // if (!user) {
  //   router.push("/login");
  // }

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
