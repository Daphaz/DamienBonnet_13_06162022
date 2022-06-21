import axios from 'axios';
import { Cookies } from 'react-cookie';

import { COOKIE_KEY_TOKEN } from '@/lib';

export const publicApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

publicApi.interceptors.response.use((value) => value.data);

const cookieManager = new Cookies();

export const protectedApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

protectedApi.interceptors.response.use((value) => value.data);

protectedApi.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }

  const token = cookieManager.get(COOKIE_KEY_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
