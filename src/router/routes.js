import { lazy } from 'react';

const HomeView = lazy(() => import('../views/HomeView'));
const RegistrationView = lazy(() => import('../views/RegistrationView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

export const paths = {
  home: '/',
  registration: '/register',
  login: '/login',
  contacts: '/contacts',
};

const routes = [
  {
    path: paths.home,
    component: HomeView,
    exact: true,
  },
  {
    path: paths.registration,
    component: RegistrationView,
  },
  {
    path: paths.login,
    component: LoginView,
  },
  {
    path: paths.contacts,
    component: ContactsView,
  },
];

export default routes;
