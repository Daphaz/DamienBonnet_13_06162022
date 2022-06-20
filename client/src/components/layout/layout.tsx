import clsx from 'clsx';
import { ReactNode } from 'react';

import { Footer } from './footer/footer';
import { Header } from './header/header';

interface ILayoutProps {
  children: ReactNode;
  bgDark?: boolean;
  flex?: boolean;
}

export const Layout = ({
  children,
  bgDark = false,
  flex = false,
}: ILayoutProps): JSX.Element => {
  const classes = clsx({
    dark: bgDark,
    flex: flex,
  });
  return (
    <>
      <Header />
      <main className={classes}>{children}</main>
      <Footer />
    </>
  );
};
