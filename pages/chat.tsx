import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatHome from "../components/Chat/ChatHome/ChatHome";
import Spinner from "../components/Spinner/Spinner";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ChatContainer = () => {
  const { loggedUser, users, isLoading } = useTypedSelector(
    (state) => state.users
  );
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
  }, [router, user]);

  if (isLoading || !loggedUser) {
    return <Spinner />;
  }

  return <ChatHome />;
};

export default ChatContainer;
