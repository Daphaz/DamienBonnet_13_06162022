import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { usersService } from '@/api/users.service';
import { UpdateUserDto } from '@/ts';

export const profile = createAsyncThunk(
  'profile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await usersService.profile();

      if (response.status === 200 && response.body) {
        return response;
      }

      return rejectWithValue(response);
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'update-user',
  async (dto: UpdateUserDto, { rejectWithValue }) => {
    try {
      const response = await usersService.update(dto);

      if (response.status === 200 && response.body) {
        return response;
      }

      return rejectWithValue(response);
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);
