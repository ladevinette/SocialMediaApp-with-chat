import { getAuth } from "firebase/auth";
import {
  Comment,
  CommentData,
  commentDeleteData,
  formPostData,
  Post,
  User,
} from "../../typing";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// Create new post
const createPost = async (formData: formPostData) => {
  const createPostData = {
    id: formData.id,
    photo: formData.photoURL,
    description: formData.postDescription,
    timestamp: formData.timestamp,
    author: {
      authorId: formData.author.authorId,
      name: formData.author.name,
      surname: formData.author.surname,
      profileImg: formData.author.profileImg,
    },
    comments: null,
  };

  // const docRef = await addDoc(collection(db, "posts"), createPostData);
  await setDoc(doc(db, "posts", formData.id), createPostData);

  const { id, photoURL, postDescription, timestamp } = formData;
  const { authorId, name, surname, profileImg } = formData.author;

  const post: Post = {
    id: id,
    photo: photoURL,
    description: postDescription,
    timestamp: timestamp,
    author: {
      authorId: authorId,
      name: name,
      surname: surname,
      profileImg: profileImg,
    },
    comments: null,
  };

  return post;
};

const getPosts = async () => {
  const listingsRef = collection(db, "posts");

  const q = query(listingsRef, orderBy("timestamp", "desc"));

  const querrySnap = await getDocs(q);

  let listings: Post[] = [];

  querrySnap.forEach((doc) => {
    const postData: Post = {
      id: doc.data().id,
      photo: doc.data().photo,
      description: doc.data().description,
      timestamp: doc.data().timestamp,
      author: {
        authorId: doc.data().author.authorId,
        name: doc.data().author.name,
        surname: doc.data().author.surname,
        profileImg: doc.data().author.profileImg,
      },
      comments: null,
    };

    listings.push(postData);
  });

  return listings;
};

const getUserPosts = async (id: string) => {
  const listingsRef = collection(db, "posts");

  const q = query(listingsRef, where("author.authorId", "==", id));

  const querrySnap = await getDocs(q);

  let listings: Post[] = [];

  querrySnap.forEach((doc) => {
    const postData: Post = {
      id: doc.data().id,
      photo: doc.data().photo,
      description: doc.data().description,
      timestamp: doc.data().timestamp,
      author: {
        authorId: doc.data().author.authorId,
        name: doc.data().author.name,
        surname: doc.data().author.surname,
        profileImg: doc.data().author.profileImg,
      },
      comments: doc.data().comments,
      // do zmiany pozniej
    };

    listings.push(postData);
  });
  return listings;
};

//ADD COMMENT
const createNewComment = async (commentData: CommentData) => {
  const userRef = doc(db, "posts", commentData.postId);
  const id = uuidv4();
  await updateDoc(userRef, {
    comments: arrayUnion({
      commentId: id,
      commentAuthor: {
        commentAuthorId: commentData.commentAuthor.commentAuthorId,
        commentAuthorName: commentData.commentAuthor.commentAuthorName,
        commentAuthorSurname: commentData.commentAuthor.commentAuthorSurname,
        commentAuthorProfileImg:
          commentData.commentAuthor.commentAuthorProfileImg,
      },
      commentContent: commentData.commentContent,
    }),
  });

  //trzeba tutaj dodac cale infor odnosnie komentarzy a nie tylko content!

  const comment: Comment = {
    commentId: id,
    commentAuthor: {
      commentAuthorId: commentData.commentAuthor.commentAuthorId,
      commentAuthorName: commentData.commentAuthor.commentAuthorName,
      commentAuthorSurname: commentData.commentAuthor.commentAuthorSurname,
      commentAuthorProfileImg:
        commentData.commentAuthor.commentAuthorProfileImg,
    },
    commentContent: commentData.commentContent,
  };

  return comment;
};

//GET ALL POST'S COMMENT
const getAllPostComments = async (postId: string) => {
  const userRef = doc(db, "posts", postId);
  const querrySnap = await getDoc(userRef);
  const commentsData = querrySnap.data();

  if (commentsData) {
    let finallCommentsArray: Comment[] = [];

    const commentsArray = commentsData.comments;
    if (commentsArray === null) {
      return null;
    }
    commentsArray.forEach((element: Comment) => {
      const data: Comment = {
        commentId: element.commentId,
        commentAuthor: {
          commentAuthorName: element.commentAuthor.commentAuthorName,
          commentAuthorSurname: element.commentAuthor.commentAuthorSurname,
          commentAuthorProfileImg:
            element.commentAuthor.commentAuthorProfileImg,
          commentAuthorId: element.commentAuthor.commentAuthorId,
        },
        commentContent: element.commentContent,
      };

      finallCommentsArray.push(data);
    });

    return finallCommentsArray;
  }
};

//Delete post
const deletePost = async (postId: string) => {
  const postRef = doc(db, "posts", postId);
  const snapshot = await getDoc(postRef);
  const post = snapshot.data();
  if (post) {
    const {
      id,
      photo,
      description,
      timestamp,
      author: { authorId, name, surname, profileImg },
      comments,
    } = post;

    const postData: Post = {
      id,
      photo,
      description,
      timestamp,
      author: { authorId, name, surname, profileImg },
      comments,
    };

    deleteDoc(doc(db, "posts", postId));
    return postData;
  }
};

//Delete comment
const deleteComment = async (data: commentDeleteData) => {
  const postRef = doc(db, "posts", data.postId);
  const postSnap = await getDoc(postRef);

  if (postSnap.exists()) {
    const postData = postSnap.data();
    const comments = postData.comments;

    let finallCommentsArray: Comment[] = [];
    comments.forEach((comment: Comment, index: number) => {
      if (comment.commentId === data.commentId) {
        // Remove the comment from the array
        comments.splice(index, 1);

        // Update the post document with the modified comments array
        updateDoc(postRef, { comments });
        const commentsArray: Comment[] = comments;
        finallCommentsArray = commentsArray;
        return commentsArray;
      }
    });
    return finallCommentsArray;
  } else {
    console.log("No post found with id: ", data.postId);
  }
};

const postsService = {
  createPost,
  getUserPosts,
  getAllPostComments,
  deletePost,
  deleteComment,
  createNewComment,
  getPosts,
};
export default postsService;
