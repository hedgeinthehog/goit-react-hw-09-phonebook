import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';
import StyledAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <StyledAppBar className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </StyledAppBar>
    </header>
  );
};

export default AppBar;
