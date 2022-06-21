import { Navigate } from 'react-router-dom';

import s from './styles.module.scss';

import { Layout } from '@/components/layout/layout';

import { useAppSelector } from '@/store/hooks';
import { userSelector } from '@/store/reducers';

import { FormLogin } from './form-login';

export const SignInTemplate = () => {
  const { user } = useAppSelector(userSelector);

  if (user) return <Navigate replace to='/profile' />;

  return (
    <Layout bgDark flex>
      <div className={s.container}>
        <div className={s.content}>
          <span className={`i user-circle ${s.icon}`}></span>
          <h1 className={s.title}>Sign In</h1>
          <FormLogin />
        </div>
      </div>
    </Layout>
  );
};
