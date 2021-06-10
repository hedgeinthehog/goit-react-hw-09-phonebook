import axios from 'axios';
import authActions from './auth-actions';
import { setAlert } from '../alert/alert-actions';
import { setErrorAlert } from '../alert/alert-operations';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest);

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);

    console.log(response);

    if (response.status === 201) {
      console.log('alert');
      dispatch(setAlert({ message: 'Welcone to PhoneBook!', type: 'success' }));
    }

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    if (error.response.status === 400) {
      dispatch(
        setAlert({
          message:
            'Registration unsuccessfull. A user with such email address might exist already',
          type: 'error',
        }),
      );
    }

    dispatch(
      authActions.registerError({
        message: error.message,
        error: error.response.status,
      }),
    );
  }
};

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest);

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    if (error.response.status === 400) {
      dispatch(
        setAlert({
          message: 'Login or password is incorrect',
          type: 'error',
        }),
      );
    }

    dispatch(
      authActions.loginError({
        message: error.message,
        error: error.response.status,
      }),
    );
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest);

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(setErrorAlert(error));
    dispatch(
      authActions.logoutError({
        message: error.message,
        error: error.response.status,
      }),
    );
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest);

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(setErrorAlert(error));
    dispatch(
      authActions.getCurrentUserError({
        message: error.message,
        error: error.response.status,
      }),
    );
  }
};

export default { register, login, logout, getCurrentUser };
