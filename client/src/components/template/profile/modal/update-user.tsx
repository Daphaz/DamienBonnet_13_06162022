import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import s from './styles.module.scss';

import { useOnClickOutside } from '@/hooks/useClickOutSide';

import { Button, InputText } from '@/components/common/field';

import { updateUser } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { userSelector } from '@/store/reducers';

type Inputs = {
  firstName: string;
  lastName: string;
};

interface ModalUpdateUserProps {
  handleClose: () => void;
}

export const ModalUpdateUser = ({ handleClose }: ModalUpdateUserProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { user, isError, isFetching } = useAppSelector(userSelector);

  const { control, handleSubmit, setError, reset } = useForm<Inputs>({
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
    },
  });

  const onSubmit = handleSubmit(async (datas) => {
    if (
      datas.firstName === user?.firstName &&
      datas.lastName === user.lastName
    ) {
      return handleClose();
    }

    await dispatch(updateUser(datas));

    if (isError) {
      reset({
        firstName: user?.firstName,
        lastName: user?.lastName,
      });
      setError('lastName', {
        type: 'manual',
        message: 'A error is happen, please try again.',
      });
    }
  });

  useOnClickOutside(rootRef, () => handleClose());

  return (
    <div className={s.root} ref={rootRef}>
      <h2 className={s.title}>Edit your profile</h2>

      <form className={s.form} onSubmit={onSubmit}>
        <InputText
          name='firstName'
          control={control}
          label='Firstname'
          rules={{
            required: 'Firstname is required',
          }}
        />
        <InputText
          name='lastName'
          control={control}
          label='Lastname'
          rules={{
            required: 'Lastname is required',
          }}
        />
        <Button
          fullWidth
          decoration
          className={s.submit}
          loading={isFetching}
          type='submit'
        >
          Edit
        </Button>
      </form>
    </div>
  );
};
