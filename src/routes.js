import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/PhoneBookHome/PhoneBookHome.js')),
    privat: false,
    restricted: false,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./components/SignUp/SignUp.js')),
    privat: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() =>
      import('./views/PhoneBookLogIn/PhoneBookLogInView.js'),
    ),
    privat: false,
    restricted: true,
  },
  {
    path: '/books',
    label: 'Books',
    exact: true,
    component: lazy(() => import('./views/PhoneBookView/PhoneBookView.js')),
    privat: true,
    restricted: false,
  },
];
