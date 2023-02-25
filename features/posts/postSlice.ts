import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Comment,
  CommentData,
  commentDeleteData,
  formPostData,
  Post,
  updateUserType,
  User,
} from "../../typing";
import postsService from "./postsService";

type State = {
  post: Post | null;
  posts: Post[] | null;
  error: null | string;
  isSuccess: boolean;
  isLoading: boolean;
  comments: Comment[] | null;
};

const initialState: State = {
  post: null,
  posts: null,
  comments: null,
  error: null,
  isSuccess: false,
  isLoading: false,
};

//create new post
export const createPost = createAsyncThunk(
  "post/createPost",
  async (data: formPostData, thunkAPI) => {
    try {
      return await postsService.createPost(data);
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//get posts
export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (_, thunkAPI) => {
    try {
      return await postsService.getPosts();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//get user posts
export const getUserPosts = createAsyncThunk(
  "post/getUserPosts",
  async (id: string, thunkAPI) => {
    try {
      return await postsService.getUserPosts(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//create new Comment
export const createNewComment = createAsyncThunk(
  "comments/createNewComment",
  async (commentData: CommentData, thunkAPI) => {
    try {
      return await postsService.createNewComment(commentData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//get all post's comments
export const getAllPostComments = createAsyncThunk(
  "comments/getAllPostComments",
  async (postId: string, thunkAPI) => {
    try {
      return await postsService.getAllPostComments(postId);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//delete Post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId: string, thunkAPI) => {
    try {
      return await postsService.deletePost(postId);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//delete Comment
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (data: commentDeleteData, thunkAPI) => {
    try {
      return await postsService.deleteComment(data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state: State) => {
      state.comments = initialState.comments;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.post = action.payload;
          state.posts;
        }
        if (action.payload && state.posts) {
          state.posts.unshift(action.payload);
        }
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.posts = action.payload;
        }
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getUserPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.posts = action.payload;
        }
      })
      .addCase(getUserPosts.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createNewComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          const commentState = state.comments;
          if (state.comments === null) {
            state.comments = [];
            state.comments = [...state.comments, action.payload];
          } else {
            state.comments = [...state.comments, action.payload];
          }
        }
      })
      .addCase(createNewComment.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getAllPostComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPostComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.comments = action.payload;
        } else if (action.payload === null) {
          state.comments = null;
        }
      })
      .addCase(getAllPostComments.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload && state.posts) {
          const deletedPost = action.payload;
          const ListAfterDeleteTodo = [...state.posts].filter(
            (post) => post.id !== deletedPost.id
          );
          state.posts = ListAfterDeleteTodo;
        }
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.comments = action.payload;
        }
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// if(state.comments) === null to state.comments = comment || comment ==> crete tab append comment to tab i append nowy || tab =>> [...comments, comment]

export const { reset } = postSlice.actions;
export default postSlice.reducer;
