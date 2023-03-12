import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { getUser } from "../features/users/usersSlice";
import EditProfilePage from "../components/EditProfile/EditProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../components/Spinner/Spinner";

function Profile() {
  const auth = getAuth();
  const router = useRouter();
  const { loggedIn, checkingStatus } = useAuthStatus();
  const [active, setActive] = useState("my-profile");
  const [user, loading, error] = useAuthState(auth);
  const { loggedUser, isLoading } = useTypedSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      dispatch(getUser(user.uid));
    }
  }, [user, dispatch]);

  return user && loggedUser ? (
    <EditProfilePage user={loggedUser} />
  ) : (
    <Spinner />
  );
}

export default Profile;
