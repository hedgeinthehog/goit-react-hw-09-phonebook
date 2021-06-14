import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';
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
  dispatch(registerRequest);

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);

    if (response.status === 201) {
      dispatch(setAlert({ message: 'Welcome to PhoneBook!', type: 'success' }));
    }

    dispatch(registerSuccess(response.data));
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
      registerError({
        message: error.message,
        error: error.response.status,
      }),
    );
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest);

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
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
      loginError({
        message: error.message,
        error: error.response.status,
      }),
    );
  }
};

const logout = () => async dispatch => {
  dispatch(logoutRequest);

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(setErrorAlert(error));
    dispatch(
      logoutError({
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

  dispatch(getCurrentUserRequest);

  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(setErrorAlert(error));
    dispatch(
      getCurrentUserError({
        message: error.message,
        error: error.response.status,
      }),
    );
  }
};

const exportedOperations = { register, login, logout, getCurrentUser };

export default exportedOperations;
