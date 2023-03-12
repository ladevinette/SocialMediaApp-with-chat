import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  createNewComment,
  deletePost,
  getAllPostComments,
  reset,
} from "../../features/posts/postSlice";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import {
  Comment,
  CommentData,
  InputChangeEventHandler,
  Post,
} from "../../typing";
import * as styles from "./PostItem.style";
import CommentItem from "../CommentItem/CommentItem";
import deleteIcon from "../../assets/svg/delete-svgrepo-com.svg";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  const { loggedUser } = useTypedSelector((state) => state.users);
  const { comments } = useTypedSelector((state) => state.posts);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState("");

  if (loggedUser) {
    const onChange: InputChangeEventHandler = (e) => {
      setComment(e.target.value);
    };

    const commentData: CommentData = {
      commentAuthor: {
        commentAuthorId: loggedUser.id,
        commentAuthorName: loggedUser.name,
        commentAuthorSurname: loggedUser.surname,
        commentAuthorProfileImg: loggedUser.profileImg,
      },
      commentContent: comment,
      postId: post.id,
    };

    const addComment = (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      dispatch(createNewComment(commentData));
      console.log("siema");
      setComment("");
    };

    const openModal = () => {
      console.log("modal is open");
      setModalIsOpen(true);
      dispatch(getAllPostComments(post.id));
    };

    const closeModal = () => {
      console.log("modal is closed");
      setModalIsOpen(false);
    };

    const handleDeletePost = (postId: string) => {
      dispatch(deletePost(postId));
    };

    Modal.setAppElement("#__next");

    return (
      <div css={styles.container}>
        <div css={styles.link}>
          <div css={styles.authorInfo}>
            <div css={styles.authorLeftSide}>
              <Link
                css={styles.profileImgBox}
                href={`/profile/${post.author.authorId}`}
              >
                <Image
                  css={styles.editProfileImg}
                  width={100}
                  height={100}
                  src={post.author.profileImg}
                  alt="profilePhoto"
                />
              </Link>
            </div>

            <div css={styles.authorRightSide}>
              <Link
                css={styles.nameAndSurname}
                href={`/profile/${post.author.authorId}`}
              >
                <p>
                  {post.author.name} {post.author.surname}
                </p>
              </Link>

              {loggedUser.id === post.author.authorId && (
                <button
                  onClick={() => handleDeletePost(post.id)}
                  css={styles.deleteButton}
                >
                  <Image src={deleteIcon} alt="image" width={25} height={25} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div css={styles.photoContainer}>
          <Image
            css={styles.editPostPhoto}
            src={post.photo}
            alt="postImage"
            width={100}
            height={100}
            priority={false}
          />
        </div>
        <div css={styles.descContainer}>
          <p css={styles.postDescription}>{post.description}</p>
          <div css={styles.commentButtonDiv}>
            <button css={styles.editCommentButton} onClick={openModal}>
              Show comments
            </button>
          </div>
        </div>

        <Modal
          css={styles.editModal}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <div css={styles.modalHeader}>
            <p css={styles.modalHeaderText}>{post.author.name} Post </p>
            <button css={styles.closeButton} onClick={closeModal}>
              X
            </button>
          </div>

          <div css={styles.commentsSection}>
            <form css={styles.editForm} onSubmit={addComment}>
              <div css={styles.addCommentContainer}>
                <div css={styles.addCommentWrapper}>
                  <div css={styles.addCommentPhotoContainer}>
                    <Image
                      css={styles.addCommentPhotoEdit}
                      src={loggedUser.profileImg}
                      alt="profilePic"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div css={styles.editInputContainer}>
                    <input
                      css={styles.editInput}
                      onChange={onChange}
                      placeholder="Write your comment....."
                      value={comment}
                    />
                    <button css={styles.addCommentButton} type="submit">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {comments &&
              comments.map((element: Comment, index) => (
                <CommentItem
                  key={element.commentId}
                  comment={element}
                  post={post}
                />
              ))}

            {comments === null && <h3>This post hasnt got any comments</h3>}
          </div>
        </Modal>
      </div>
    );
  } else {
    return <div>user is not logged in</div>;
  }
}
