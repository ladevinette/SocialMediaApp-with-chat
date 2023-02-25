import { FieldValue, Timestamp } from "firebase/firestore";
import React from "react";

type User = {
  birthdate: string;
  email: string;
  id: string;
  name: string;
  profileImg: string;
  surname: string;
  timestamp: Timestamp;
  description: string;
  instagram: string;
  facebook: string;
  beReal: string;
  snapchat: string;
  nationality: string;
  hobbies: string;
};

type Comment = {
  commentId: string;
  commentAuthor: {
    commentAuthorId: string;
    commentAuthorName: string;
    commentAuthorSurname: string;
    commentAuthorProfileImg: string;
  };
  commentContent: string;
};

type CommentData = {
  commentAuthor: {
    commentAuthorId: string;
    commentAuthorName: string;
    commentAuthorSurname: string;
    commentAuthorProfileImg: string;
  };
  commentContent: string;
  postId: string;
};

type Post = {
  id: string;
  photo: string;
  description: string;
  timestamp: Timestamp | FieldValue;
  author: {
    authorId: string;
    name: string;
    surname: string;
    profileImg: string;
  };
  comments: Comment | Comment[] | null;
};

type formPostData = {
  id: string;
  photoURL: string;
  postDescription: string;
  timestamp: FieldValue;
  author: {
    authorId: string;
    name: string;
    surname: string;
    profileImg: string;
  };
};

type SliceType = {
  formPostData: formPostData;
  user: User;
};

type updateUserType = {
  user: User;
  updatedProfPic: string;
};

type userChats = {
  date: Timestamp;
  userInfo: {
    id: string;
    name: string;
    surname: string;
    profileImg: string;
  };
  lastMessage: {
    text: string;
  };
};

type message = {
  date: Timestamp;
  id: string;
  senderId: string;
  text: string;
  img: string;
};

type userInfo = {
  id: string;
  name: string;
  surname: string;
  profileImg: string;
};

type commentDeleteData = {
  commentId: string;
  postId: string;
};

export type InputChangeEventHandler =
  React.ChangeEventHandler<HTMLInputElement>;

export type TextAreaEventHandler =
  React.ChangeEventHandler<HTMLTextAreaElement>;
