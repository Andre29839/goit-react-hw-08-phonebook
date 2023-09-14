import { createSlice } from '@reduxjs/toolkit';
import { register, loginization, logOut, refreshUser } from './operations';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;

  // toast.error(
  //   `${payload}` === 'Network Error'
  //     ? `${payload}`
  //     : 'something went wrong. Check your data and try again'
  // );
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      password: null,
    },
    token: null,
    isLoaggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoaggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: handleRejected,
    [loginization.pending]: handlePending,
    [loginization.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoaggedIn = true;
      state.isLoading = false;
    },
    [loginization.rejected]: handleRejected,
    [logOut.pending]: handlePending,
    [logOut.fulfilled]: state => {
      state.token = null;
      state.user = { email: null, password: null };
      state.isLoaggedIn = false;
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected]: handleRejected,
    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoaggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
    },
  },
});

export const authReduser = authSlice.reducer;
