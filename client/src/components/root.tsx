import { Route, Routes } from 'react-router-dom';

import { DashboardPage, ErrorPage, HomePage, SignInPage } from '@/pages';

type RouteType = {
  name: string;
  path: string;
  element: () => JSX.Element;
};

const routes: RouteType[] = [
  {
    name: 'Home',
    path: '/',
    element: HomePage,
  },
  {
    name: 'SignIn',
    path: 'sign-in',
    element: SignInPage,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    element: DashboardPage,
  },
  {
    name: 'Error',
    path: '*',
    element: ErrorPage,
  },
];

export const Root = () => {
  return (
    <Routes>
      {routes.map(({ name, element: Element, path }) => (
        <Route key={name} path={path} element={<Element />} />
      ))}
    </Routes>
  );
};
