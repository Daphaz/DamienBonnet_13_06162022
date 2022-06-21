import { Route, Routes } from 'react-router-dom';

import { ErrorPage, HomePage, ProfilePage, SignInPage } from '@/pages';

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
    name: 'Login',
    path: 'login',
    element: SignInPage,
  },
  {
    name: 'Profile',
    path: '/profile',
    element: ProfilePage,
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
