import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/posts/postSlice";
import usersSlice from "./features/users/usersSlice";
import usersReducer from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
