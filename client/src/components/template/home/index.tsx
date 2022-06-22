import { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { COOKIE_KEY_TOKEN } from '@/lib';

import { Layout } from '@/components/layout/layout';

import { profile } from '@/store/actions';
import { useAppDispatch } from '@/store/hooks';

import { Features } from './features';
import { Hero } from './hero';

export const HomeTemplate = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies();

  const tryFetchUser = useCallback(async () => {
    const token = cookies[COOKIE_KEY_TOKEN];

    if (token) {
      await dispatch(profile());
    }
  }, [dispatch, cookies]);

  useEffect(() => {
    tryFetchUser();
  }, [tryFetchUser]);

  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
};
