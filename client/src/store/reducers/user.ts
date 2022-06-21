import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

import { COOKIE_KEY_TOKEN } from '@/lib';

import { User } from '@/ts';

import { login, profile, updateUser } from '../actions';
import { AppState } from '../store';

const cookieManager = new Cookies();

type UserInitialState = {
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  user: undefined | User;
};

const initialState: UserInitialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserState: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isFetching = false;
      return state;
    },
    logout: (state) => {
      cookieManager.remove(COOKIE_KEY_TOKEN);
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state) => {
        state.isFetching = false;
        state.isError = true;
      })
      .addCase(updateUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.user = payload.body;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isFetching = false;
        state.isError = true;
      })
      .addCase(profile.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(profile.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.user = payload.body;
      })
      .addCase(profile.rejected, (state) => {
        state.isFetching = false;
        state.isError = true;
      });
  },
});

export const { clearUserState, logout } = userSlice.actions;

export const userSelector = (state: AppState) => state.user;
