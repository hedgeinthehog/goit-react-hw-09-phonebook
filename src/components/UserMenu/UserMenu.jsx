import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './UserMenu.module.css';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Hidden xsDown>
        <span>Welcome, {email}</span>
      </Hidden>
      <Button onClick={onLogout} className={styles.button}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
