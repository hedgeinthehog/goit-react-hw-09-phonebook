import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Router from '../../router/Router';
import AppBar from '../AppBar';
import Notification from '../Notification';
import Container from '@material-ui/core/Container';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Notification />
      <Router />
    </Container>
  );
};

export default App;
