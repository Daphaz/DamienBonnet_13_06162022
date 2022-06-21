import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Spinner } from '@/components/common';
import { ProfileTemplate } from '@/components/template/profile';

import { profile } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { userSelector } from '@/store/reducers';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, isError, isFetching } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const handleUser = useCallback(async () => {
    await dispatch(profile());

    if (isError) {
      navigate('/');
    }
  }, [dispatch, navigate, isError]);

  useEffect(() => {
    handleUser();
  }, [handleUser]);

  if (isFetching || !user) {
    return (
      <main className='center'>
        <Spinner color='black' />
      </main>
    );
  }

  return <ProfileTemplate user={user} />;
};
