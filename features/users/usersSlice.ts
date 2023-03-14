import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateUserType, User } from "../../typing";
import usersService from "./usersService";

type State = {
  userProfile: User | null;
  loggedUser: User | null;
  users: User[] | null;
  error: null | string;
  isSuccess: boolean;
  isLoading: boolean;
};

const initialState: State = {
  userProfile: null,
  loggedUser: null,
  users: null,
  error: null,
  isSuccess: false,
  isLoading: false,
};

// Get user
//Register new user
export const getUser = createAsyncThunk(
  "users/getUser",
  async (id: string, thunkAPI) => {
    try {
      return await usersService.getLoggedUser(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "users/getUserProfile",
  async (data: string, thunkAPI) => {
    try {
      return await usersService.getUserProfile(data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Update user data
export const updateUserData = createAsyncThunk(
  "users/updateUserData",
  async (data: User, thunkApi) => {
    try {
      return await usersService.updateProfileData(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

//get All users
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      return await usersService.getUsers();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.loggedUser = action.payload;
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.userProfile = action.payload;
        }
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.loggedUser = action.payload;
        }
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) {
          state.users = action.payload;
        }
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
