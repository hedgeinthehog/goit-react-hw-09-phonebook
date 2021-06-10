import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { setAlert, hideAlert } from './alert-actions';

const message = createReducer(null, {
  [setAlert]: (_, { payload }) => payload.message,
  [hideAlert]: (_, __) => null,
});

const isOpen = createReducer(false, {
  [setAlert]: (_, __) => true,
  [hideAlert]: (_, __) => false,
});

const type = createReducer(null, {
  [setAlert]: (_, { payload }) => payload.type,
});

export default combineReducers({
  message,
  isOpen,
  type,
});
