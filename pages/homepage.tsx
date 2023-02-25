import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import "../messaging_init_in_sw";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { HomePage } from "../components/HomePage";

const HomePageContainer = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
  }, [router, user]);

  return <HomePage />;
};

export default HomePageContainer;
