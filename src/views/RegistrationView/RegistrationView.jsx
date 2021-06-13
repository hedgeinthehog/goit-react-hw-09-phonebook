import RegisterForm from '../../components/RegisterForm';
import styles from './RegistrationView.module.css';
import Box from '@material-ui/core/Box';

const RegistrationView = () => {
  return (
    <Box className={styles.box}>
      <h1>Register</h1>
      <RegisterForm />
    </Box>
  );
};

export default RegistrationView;
