import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Comment, commentDeleteData, Post } from "../../typing";
import * as styles from "./CommentItem.style";
import deleteIcon from "../../assets/svg/delete-svgrepo-com.svg";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import {
  collection,
  deleteField,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { deleteComment } from "../../features/posts/postSlice";

type Props = {
  comment: Comment;
  post: Post;
};

const CommentItem = ({ comment, post }: Props) => {
  const { loggedUser } = useTypedSelector((state) => state.users);
  const dispatch = useAppDispatch();

  // const deleteComment = async (commentId: string) => {
  //   const postRef = doc(db, "posts", post.id);
  //   const postSnap = await getDoc(postRef);

  //   if (postSnap.exists()) {
  //     const postData = postSnap.data();
  //     const comments = postData.comments;

  //     comments.forEach((comment: Comment, index: number) => {
  //       if (comment.commentId === commentId) {
  //         // Remove the comment from the array
  //         comments.splice(index, 1);

  //         // Update the post document with the modified comments array
  //         updateDoc(postRef, { comments });
  //         const commentsArray: Comment[] = comments;
  //         return commentsArray;
  //       }
  //     });
  //   } else {
  //     console.log("No post found with id: ", post.id);
  //   }
  // };

  const handleDeleteComment = async (commentId: string) => {
    const data: commentDeleteData = {
      commentId: commentId,
      postId: post.id,
    };

    dispatch(deleteComment(data));
    return;
  };

  return (
    <div css={styles.container}>
      {loggedUser && (
        <div css={styles.commentWrapper}>
          <Link
            href={`/profile/${comment.commentAuthor.commentAuthorId}`}
            css={styles.photoContainer}
          >
            <Image
              css={styles.commentPhotoEdit}
              src={comment.commentAuthor.commentAuthorProfileImg}
              alt="profilePic"
              width={100}
              height={100}
            />
          </Link>
          <div css={styles.contentContainer}>
            <div css={styles.nameSurname}>
              {comment.commentAuthor.commentAuthorName}{" "}
              {comment.commentAuthor.commentAuthorSurname}
            </div>
            {loggedUser.id === comment.commentAuthor.commentAuthorId ||
            post.author.authorId === loggedUser.id ? (
              <button
                onClick={() => handleDeleteComment(comment.commentId)}
                css={styles.deleteButton}
              >
                <Image src={deleteIcon} alt="image" width={20} height={20} />
              </button>
            ) : null}
            <div css={styles.commentContentText}>{comment.commentContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
