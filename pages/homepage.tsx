import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { HomePage } from "../components/HomePage";
import Spinner from "../components/Spinner/Spinner";

const HomePageContainer = () => {
  const [user, loading] = useAuthState(getAuth());
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  return user ? <HomePage /> : <Spinner />;
};

export default HomePageContainer;
