import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [], // Array of users
  user: null, // Current logged-in user
  msg: null, // Feedback message
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLogin: false,
};

// Logout async action
export const logout = createAsyncThunk("users/logout", async () => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/logout`);
    const msg = response.data.msg;
    return { msg };
  } catch (err) {
    console.error(err);
  }
});

// Register user
export const registerUser = createAsyncThunk("users/registerUser", async (userData) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/registerUser`, {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
    });
    const user = response.data.user;
    const msg = response.data.msg;
    return { user, msg };
  } catch (error) {
    return { msg: error.message };
  }
});

// Login async action
export const login = createAsyncThunk("users/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: userData.email,
      password: userData.password,
    });
    const user = response.data.user;
    const msg = response.data.msg;
    return { user, msg };
  } catch (error) {
    return rejectWithValue({ msg: error.response.data.msg });
  }
});

// Slice
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser(state, action) {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.user = action.payload.user;
        state.msg = action.payload.msg;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isError = true;
        state.msg = "Unexpected error occurred";
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLogin = true;
        state.user = action.payload.user;
        state.msg = action.payload.msg;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isLogin = false;
        state.user = null;
        state.msg = action.payload.msg;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLogin = false;
        state.user = null;
        state.msg = action.payload.msg;
        state.isLoading = false;
      });
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;