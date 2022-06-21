import { ApiResponse, LoginDto, LoginResponse, UpdateUserDto } from '@/ts';

import { protectedApi, publicApi } from './instance';

const urls = {
  login: '/user/login',
  profile: '/user/profile',
  update: '/user/profile',
};

const login = async (dto: LoginDto): Promise<LoginResponse> =>
  publicApi.post(urls.login, dto);

const profile = async (): Promise<ApiResponse> =>
  protectedApi.post(urls.profile);

const update = async (dto: UpdateUserDto): Promise<ApiResponse> =>
  protectedApi.put(urls.update, dto);

export const usersService = {
  login,
  profile,
  update,
};
