import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/PhoneBookHome/PhoneBookHome.js')),
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./components/SignUp/SignUp.js')),
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() =>
      import('./views/PhoneBookLogIn/PhoneBookLogInView.js'),
    ),
  },
  // {
  //   path: '/tasks',
  //   label: 'Tasks',
  //   exact: true,
  //   component: lazy(() => import('./views/PhoneBookView/PhoneBookView.js')),
  // },
];
