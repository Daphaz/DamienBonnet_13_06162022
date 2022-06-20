import { useForm } from 'react-hook-form';

import { Button, InputText } from '@/components/common/field';

type Inputs = {
  username: string;
  password: string;
  remember: boolean;
};

export const FormLogin = () => {
  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      password: '',
      username: '',
      remember: false,
    },
  });

  const onSubmit = handleSubmit(async (datas) => {
    try {
      console.log(datas);
    } catch (e) {
      console.error('Form Login: ', e);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <InputText
        name='username'
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
      <Button fullWidth decoration>
        Sign In
      </Button>
    </form>
  );
};
