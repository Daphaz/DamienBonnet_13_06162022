import { useRef, useState } from 'react';

import s from './styles.module.scss';

import { useOnClickOutside } from '@/hooks/useClickOutSide';

import { Button } from '@/components/common/field';
import { ModalPortal } from '@/components/common/modal';
import { Layout } from '@/components/layout/layout';

import { User } from '@/ts';

import { ModalUpdateUser } from './modal/update-user';

interface ProfileTemplateProps {
  user: User;
}

export const ProfileTemplate = ({ user }: ProfileTemplateProps) => {
  const [openModal, setOpenModal] = useState(false);
  const childRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(childRef, () => setOpenModal(false));

  return (
    <>
      <Layout bgDark flex>
        <div className={s.container}>
          <h1 className={s.title}>
            Welcome back <br />
            {`${user.firstName} ${user.lastName}!`}
          </h1>

          <Button
            size='small'
            type='button'
            className={s.edit_btn}
            onClick={() => setOpenModal(true)}
          >
            Edit Name
          </Button>
        </div>
      </Layout>
      {openModal && (
        <ModalPortal>
          <ModalUpdateUser handleClose={() => setOpenModal(false)} />
        </ModalPortal>
      )}
    </>
  );
};
