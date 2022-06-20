import clsx from 'clsx';
import { DetailedHTMLProps, ReactNode } from 'react';

import s from './styles.module.scss';

import { Spinner } from '@/components/common';

export interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size?: 'small' | 'big';
  loading?: boolean;
  fullWidth?: boolean;
  decoration?: boolean;
}

export const Button = ({
  children,
  size = 'big',
  loading = false,
  fullWidth,
  decoration,
  className,
  ...rest
}: ButtonProps) => {
  const classes = clsx(
    s.btn,
    s[size],
    {
      [s.loading]: loading,
      [s.full]: fullWidth,
      [s.underline]: decoration,
    },
    className
  );

  return (
    <button className={classes} {...rest}>
      {loading && (
        <span className={s.spinner}>
          <Spinner width={18} height={18} />
        </span>
      )}
      <span className={s.text}>{children}</span>
    </button>
  );
};
