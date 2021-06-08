import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './UserMenu.module.css';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.wrapper}>
    <Hidden xsDown>
      <span>Welcome, {email}</span>
    </Hidden>
    <Button onClick={onLogout} className={styles.button}>
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
