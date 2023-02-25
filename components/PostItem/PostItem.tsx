import React, { useEffect, useState } from "react";
import { style } from "@mui/system";
import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import {
  createNewComment,
  deletePost,
  getAllPostComments,
  reset,
} from "../../features/posts/postSlice";
import { db } from "../../firebase-config";
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
import commentsIcon from "../../assets/svg/comments-svgrepo-com (1).svg";

type Props = {
  post: Post;
};

// tutaj pobieramy dane authora z reduxa poniewaz posiadamy takie info jak author ktore jest id uzytkownika ktory stworzył post

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
    };

    const openModal = () => {
      setModalIsOpen(true);
      dispatch(getAllPostComments(post.id));
    };

    const closeModal = () => {
      setModalIsOpen(false);
      // reset();
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
                  width={50}
                  height={50}
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
          />
        </div>
        <div css={styles.descContainer}>
          <p css={styles.postDescription}>{post.description}</p>
          <button css={styles.editCommentButton} onClick={openModal}>
            Show comments
            <Image
              width={20}
              height={20}
              src={commentsIcon}
              alt="profilePhoto"
            />
          </button>
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
          {/* <div css={styles.postContainer}>
            <div css={styles.container}>
              <Link css={styles.link} href={`/profile/${post.author.authorId}`}>
                <div css={styles.authorInfo}>
                  <div css={styles.authorLeftSide}>
                    <Image
                      width={50}
                      height={50}
                      src={post.author.profileImg}
                      alt="profilePhoto"
                    />
                  </div>

                  <div css={styles.authorRightSide}>
                    <p css={styles.nameAndSurname}>
                      {post.author.name} {post.author.surname}
                    </p>
                  </div>
                </div>
              </Link>

              <div css={styles.photoContainer}>
                <Image
                  css={styles.editPostPhoto}
                  src={post.photo}
                  alt="postImage"
                  width={100}
                  height={100}
                />
              </div>
              <div css={styles.descContainer}>{post.description}</div>
            </div>
          </div> */}
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
                    <input css={styles.editInput} onChange={onChange} />
                    <button css={styles.addCommentButton} type="submit">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {comments &&
              comments.map((element: Comment, index) => (
                <CommentItem key={index} comment={element} post={post} />
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

//zrobic state do przechowywania komentarzy i w dispatchu wysylac tresc komenta
