import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Login from "./login";
import { css } from "@emotion/css";
import {
  doc,
  updateDoc,
  collection,
  getDoc,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { User } from "../typing";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { getUser } from "../features/users/usersSlice";
import Image from "next/image";
import EditProfilePage from "../components/EditProfile/EditProfile";
import ShowProfilePostsPage from "../components/ShowProfilePosts";
import ProfilePage from "../components/ProfilePage";
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
    if (user) {
      dispatch(getUser(user.uid));
    }
  }, [user, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!loggedIn) return <Login />;

  if (loggedUser) {
    return <EditProfilePage user={loggedUser} />;
  }
}

export default Profile;
