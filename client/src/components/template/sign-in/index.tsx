import s from './styles.module.scss';

import { Layout } from '@/components/layout/layout';

import { FormLogin } from './form-login';

export const SignInTemplate = () => {
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
