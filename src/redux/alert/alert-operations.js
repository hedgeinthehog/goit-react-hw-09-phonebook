import { setAlert } from './alert-actions';

const setErrorAlert = error => dispatch => {
  const code = error.response.status;

  if (code === 500)
    dispatch(
      setAlert({
        message: 'Server error occured. Please try again',
        type: 'error',
      }),
    );
  if (code === 401)
    dispatch(
      setAlert({ message: 'Operation is not authorized', type: 'error' }),
    );
};

export { setErrorAlert };
