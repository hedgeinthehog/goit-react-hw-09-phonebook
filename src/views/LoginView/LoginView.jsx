import LoginForm from '../../components/LoginForm';
import styles from './LoginView.module.css';
import Box from '@material-ui/core/Box';

const LoginView = () => {
  return (
    <Box className={styles.box}>
      <h1>Login</h1>
      <LoginForm />
    </Box>
  );
};

export default LoginView;
