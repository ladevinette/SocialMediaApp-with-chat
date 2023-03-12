import React from "react";
import { Post } from "../../typing";
import { PostItem } from "../PostItem/PostItem";
import * as styles from "./UserPosts.styles";

type Props = {
  posts: Post[] | null;
};

export function UserPosts({ posts }: Props) {
  if (posts) {
    return (
      <div css={styles.profilePostsContainer}>
        {posts &&
          posts.map((element) => (
            <div css={styles.postContainer} key={element.id + 1}>
              <PostItem post={element} />
            </div>
          ))}
      </div>
    );
  } else {
    return <div css={styles.info}>This user havent upload any photo yet</div>;
  }
}
