import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy } from 'react';
import { paths } from './routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const RegistrationView = lazy(() => import('../views/RegistrationView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

const Router = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route path={paths.home} component={HomeView} exact />
      <PublicRoute
        path={paths.registration}
        restricted
        redirectTo={paths.contacts}
        component={RegistrationView}
      />
      <PublicRoute
        path={paths.login}
        restricted
        redirectTo={paths.contacts}
        component={LoginView}
      />
      <PrivateRoute
        path={paths.contacts}
        redirectTo={paths.login}
        component={ContactsView}
      />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Router;
