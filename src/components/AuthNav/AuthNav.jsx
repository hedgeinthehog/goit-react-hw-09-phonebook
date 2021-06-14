import { NavLink } from 'react-router-dom';
import { paths } from '../../router/routes';
import styles from './AuthNav.module.css';
import Button from '@material-ui/core/Button';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to={paths.login}
        className={styles.navItem}
        activeClassName={styles.active}
      >
        <Button className={styles.button}>Login</Button>
      </NavLink>
      <NavLink
        to={paths.registration}
        className={styles.navItem}
        activeClassName={styles.active}
      >
        <Button className={styles.button}>Register</Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
