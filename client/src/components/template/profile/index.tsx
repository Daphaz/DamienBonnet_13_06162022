import { useRef, useState } from 'react';

import s from './styles.module.scss';

import { capitalizeFirstLetter, getLastFourDigit } from '@/lib';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

import { Card } from '@/components/common/card';
import { Button } from '@/components/common/field';
import { ModalPortal } from '@/components/common/modal';
import { Layout } from '@/components/layout/layout';

import { mockAccounts } from '@/mocks/accounts';
import { ACCOUNT_TYPE, User } from '@/ts';

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

          <div className={s.list}>
            <h2 className={s.only}>Accounts</h2>
            {mockAccounts.map(({ id, amount, iban, account_type }) => {
              const label =
                account_type === ACCOUNT_TYPE.CREDIT_CARD
                  ? 'Current'
                  : 'Available';
              return (
                <Card
                  key={id}
                  amount={amount}
                  title={`Argent Bank ${capitalizeFirstLetter(
                    account_type
                  )} (x${getLastFourDigit(iban)})`}
                  btnLabel='View transaction'
                  description={`${label} Balance`}
                />
              );
            })}
          </div>
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
