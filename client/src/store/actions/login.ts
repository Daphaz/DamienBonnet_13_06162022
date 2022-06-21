import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

import { COOKIE_KEY_TOKEN } from '@/lib';

import { usersService } from '@/api/users.service';
import { LoginDto } from '@/ts';

export const login = createAsyncThunk(
  'login',
  async (payload: LoginDto, { rejectWithValue }) => {
    try {
      const response = await usersService.login(payload);

      if (response.status === 200 && response.body) {
        const cookie = new Cookies();
        cookie.set(COOKIE_KEY_TOKEN, response.body.token, {
          path: '/',
          secure: true,
        });
        return response;
      }

      return rejectWithValue(response);
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);
