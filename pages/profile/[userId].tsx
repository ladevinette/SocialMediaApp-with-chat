import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../../components/Spinner/Spinner";

import UserProfile from "../../components/UserProfile/UserProfile";

function ProfilePage() {
  const [user, loading] = useAuthState(getAuth());
  const router = useRouter();
  const auth = getAuth();
  const userId = router.query.userId;

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  return user ? <UserProfile userId={userId} /> : <Spinner />;
}

export default ProfilePage;
