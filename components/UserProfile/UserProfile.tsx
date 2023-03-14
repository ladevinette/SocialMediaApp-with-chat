import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { UserPosts } from "../../components/UserPosts/UserPosts";
import {
  fetchMoreUserPosts,
  getUserPosts,
} from "../../features/posts/postSlice";
import { getUserProfile } from "../../features/users/usersSlice";
import { db } from "../../firebase-config";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchMoreUserPostTypes, Post } from "../../typing";
import * as styles from "./UserProfile.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/Spinner/Spinner";

type Props = {
  userId: string | string[];
};

function UserProfile({ userId }: Props) {
  const { userProfile, isLoading } = useTypedSelector((state) => state.users);
  const { posts } = useTypedSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState("user-info");
  const [lastFetchedPost, setLastFetchedPost] = useState<Post>();

  useEffect(() => {
    if (userId) {
      const id = String(userId);
      dispatch(getUserProfile(id));
      dispatch(getUserPosts(id));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (posts) {
      const lastVisible = posts[posts.length - 1];
      setLastFetchedPost(lastVisible);
    }
  }, [posts]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleClick = async () => {
    const postRef = doc(db, "posts", lastFetchedPost.id);
    const postSnap = await getDoc(postRef);
    const data: fetchMoreUserPostTypes = {
      lastVisible: postSnap,
      userId: String(userId),
    };
    await dispatch(fetchMoreUserPosts(data));
  };

  if (userId && userProfile) {
    return (
      <div css={styles.container}>
        <div css={styles.leftContainer}>
          <div css={styles.leftWrapper}>
            <div css={styles.topWrapper}>
              <div css={styles.userProfilePhotoContainer}>
                <Image
                  css={styles.editUserProfilePhoto}
                  src={userProfile.profileImg}
                  height={100}
                  width={100}
                  alt="profileImage"
                />
              </div>
            </div>

            <div css={styles.userDataWrapper}>
              <div css={styles.userDataContainer}>
                <p css={styles.nameAndSurname}>
                  {userProfile.name} {userProfile.surname}
                </p>

                <p css={styles.country}>{userProfile.nationality}</p>
              </div>
              <div>
                <p css={styles.date}>
                  JOINED AT:{" "}
                  {userProfile.timestamp.toDate().toLocaleDateString()}
                </p>
              </div>
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
                  {userProfile.name.toUpperCase()} INFO
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
              {active === "user-info" && <UserInfo user={userProfile} />}
              {active === "user-post" && posts && (
                <div id="my-container" css={styles.postsContainer}>
                  <InfiniteScroll
                    css={styles.editInfiniteScroll}
                    dataLength={posts.length}
                    next={handleClick}
                    hasMore={true}
                    loader={<p></p>}
                    endMessage={<p>You scrolled through all posts</p>}
                    scrollableTarget="my-container"
                  >
                    <UserPosts posts={posts} />
                  </InfiniteScroll>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
