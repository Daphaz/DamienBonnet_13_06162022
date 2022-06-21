import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import s from './styles.module.scss';

import { Button, InputText } from '@/components/common/field';

import { login } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearUserState, userSelector } from '@/store/reducers';

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
};

const defaultValues = {
  password: '',
  email: '',
  remember: false,
};

export const FormLogin = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues,
  });
  const dispatch = useAppDispatch();
  const { isError, isFetching, isSuccess } = useAppSelector(userSelector);

  const onSubmit = handleSubmit(({ email, password }) =>
    dispatch(login({ email, password }))
  );

  const onReturn = useCallback(() => {
    dispatch(clearUserState());
  }, [dispatch]);

  const onError = useCallback(() => {
    if (isError) {
      reset(defaultValues);

      setInterval(() => dispatch(clearUserState()), 4000);
    }
  }, [reset, isError, dispatch]);

  const onSucess = useCallback(() => {
    if (isSuccess) {
      navigate('/profile');
    }
  }, [navigate, isSuccess]);

  useEffect(() => {
    return () => {
      onReturn();
    };
  }, [onReturn]);

  useEffect(() => {
    onError();
  }, [onError]);

  useEffect(() => {
    onSucess();
  }, [onSucess]);

  return (
    <form onSubmit={onSubmit}>
      <InputText
        name='email'
        control={control}
        label='Username'
        rules={{
          required: 'username is required.',
        }}
      />
      <InputText
        name='password'
        control={control}
        label='Password'
        rules={{
          required: 'password is required.',
        }}
        inputProps={{
          type: 'password',
        }}
      />
      <InputText
        name='remember'
        control={control}
        label='Remember'
        rules={{}}
        inputProps={{
          type: 'checkbox',
        }}
        checkbox
      />
      <Button fullWidth decoration loading={isFetching}>
        Sign In
      </Button>
      {isError && !isFetching && (
        <span className={s.formError}>Verify your credentials..</span>
      )}
    </form>
  );
};
