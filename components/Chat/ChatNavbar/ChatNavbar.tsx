import { getAuth } from "firebase/auth";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUser } from "../../../features/users/usersSlice";
import {
  useAppDispatch,
  useTypedSelector,
} from "../../../hooks/useTypedSelector";
import * as styles from "./ChatNavbar.styles";

const ChatNavbar = () => {
  const { loggedUser } = useTypedSelector((state) => state.users);
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      dispatch(getUser(user.uid));
    }
  }, [dispatch, user]);

  return (
    <div css={styles.navbar}>
      <span css={styles.logo}>Final Project Chat</span>
      {loggedUser && (
        <div css={styles.user}>
          <Image
            css={styles.img}
            src={loggedUser.profileImg}
            alt="profpic"
            width={100}
            height={100}
          />
          <span>
            {loggedUser.name} {loggedUser.surname}
          </span>
        </div>
      )}
    </div>
  );
};

export default ChatNavbar;
