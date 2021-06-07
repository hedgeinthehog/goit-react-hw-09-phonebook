import { NavLink } from 'react-router-dom';
import { paths } from '../../router/routes';

const AuthNav = () => (
  <div>
    <NavLink to={paths.login}>Login</NavLink>
    <NavLink to={paths.registration}>Register</NavLink>
  </div>
);

export default AuthNav;
