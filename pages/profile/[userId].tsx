import { getAuth } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../../components/Spinner/Spinner";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { UserPosts } from "../../components/UserPosts/UserPosts";
import { getUserPosts } from "../../features/posts/postSlice";
import { getUserProfile } from "../../features/users/usersSlice";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import * as styles from "./profile.style";

function ProfilePage() {
  const { loggedUser, isLoading } = useTypedSelector((state) => state.users);
  const { posts } = useTypedSelector((state) => state.posts);
  const router = useRouter();
  const auth = getAuth();
  const userId = router.query.userId;
  const dispatch = useAppDispatch();
  const [active, setActive] = useState("user-info");
  const [user, loading, error] = useAuthState(auth);

  // if (!user) {
  //   router.push("/login");
  // }

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user, router]);

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //     return;
  //   }
  // }, [router, user]);

  useEffect(() => {
    if (userId) {
      const id = String(userId);
      dispatch(getUserProfile(id));
      dispatch(getUserPosts(id));
    }
  }, [dispatch, userId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (userId && loggedUser) {
    return (
      <div css={styles.container}>
        <div css={styles.leftContainer}>
          <div css={styles.leftWrapper}>
            <div css={styles.userProfilePhotoCpntainer}>
              <Image
                css={styles.editUserProfilePhoto}
                src={loggedUser.profileImg}
                height={100}
                width={100}
                alt="profileImage"
              />
            </div>
            <div css={styles.userDataContainer}>
              <p css={styles.nameAndSurname}>
                {loggedUser.name} {loggedUser.surname}
              </p>
              <p css={styles.country}> {loggedUser.nationality}</p>
              <p css={styles.date}>
                JOINED AT: {loggedUser.timestamp.toDate().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <div css={styles.divContainer}>
          <div css={styles.divWrapper}>
            <div css={styles.staticTopContainer}>
              <div css={styles.staticTopContainerUserInfo}>
                <button
                  onClick={() => {
                    setActive("user-info");
                  }}
                  css={styles.showUserInfoBtn}
                >
                  {loggedUser.name.toUpperCase()} INFO
                </button>
                <button
                  onClick={() => {
                    setActive("user-post");
                  }}
                  css={styles.showUserPostsBtn}
                >
                  POSTS
                </button>
              </div>
            </div>
            <div css={styles.dynamicBottomContainer}>
              {active === "user-info" && <UserInfo user={loggedUser} />}
              {active === "user-post" && <UserPosts posts={posts} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
