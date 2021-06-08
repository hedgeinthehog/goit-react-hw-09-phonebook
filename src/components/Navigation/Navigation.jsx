import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { paths } from '../../router/routes';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './Navigation.module.css';
import Button from '@material-ui/core/Button';

const Navigation = ({ isAuthenticated }) => (
  <div>
    <NavLink
      to={paths.home}
      exact
      className={styles.navItem}
      activeClassName={styles.active}
    >
      <Button className={styles.button}>Home</Button>
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to={paths.contacts}
        className={styles.navItem}
        activeClassName={styles.active}
      >
        <Button className={styles.button}>Contacts</Button>
      </NavLink>
    )}
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
