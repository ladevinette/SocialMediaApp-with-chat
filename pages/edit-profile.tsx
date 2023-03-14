import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { getUser } from "../features/users/usersSlice";
import EditProfilePage from "../components/EditProfile/EditProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../components/Spinner/Spinner";
import { User } from "../typing";

function Profile() {
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const { loggedUser } = useTypedSelector((state) => state.users);
  const [editUser, setEditUser] = useState<User>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      dispatch(getUser(user.uid));
      console.log("getting user");
    }
  }, [user, dispatch]);

  return user && loggedUser ? (
    <EditProfilePage user={loggedUser} />
  ) : (
    <Spinner />
  );
}

export default Profile;
