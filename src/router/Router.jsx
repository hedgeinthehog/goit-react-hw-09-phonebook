import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';

const Router = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Router;
