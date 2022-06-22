import clsx from 'clsx';

import s from './styles.module.scss';

import { formatAmount } from '@/lib';

import { Button } from '../field';

interface CardProps {
  title: string;
  btnLabel: string;
  amount: number;
  description: string;
}

export const Card = ({ btnLabel, title, amount, description }: CardProps) => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.amount}>{formatAmount(amount / 100)}</p>
        <p className={s.description}>{description}</p>
      </div>
      <div className={clsx(s.wrapper, s.cta)}>
        <Button fullWidth size='big'>
          {btnLabel}
        </Button>
      </div>
    </div>
  );
};
