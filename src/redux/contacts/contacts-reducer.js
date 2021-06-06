import { combineReducers } from 'redux';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateFilter,
} from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const contactExists = state.find(contact => contact.name === payload.name);

    if (contactExists) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
  [addContactError]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
  [deleteContactError]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
