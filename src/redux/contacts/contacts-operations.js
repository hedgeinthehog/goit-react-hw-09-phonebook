import axios from 'axios';
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
import contactsSelectors from './contacts-selectors';
import { setErrorAlert } from '../alert/alert-operations';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = source => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts', source)
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => {
      if (!axios.isCancel(error)) {
        dispatch(setErrorAlert(error));
        dispatch(
          fetchContactsError({
            message: error.message,
            error: error.response.status,
          }),
        );
      }
    });
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => {
      dispatch(setErrorAlert(error));
      dispatch(
        addContactError({
          message: error.message,
          error: error.response.status,
        }),
      );
    });
};

const deleteContact = id => (dispatch, getState) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
      const state = getState();
      const shownContactsCount =
        contactsSelectors.getFilteredContacts(state).length;

      if (shownContactsCount === 0) dispatch(updateFilter(''));
    })
    .catch(error => {
      dispatch(setErrorAlert(error));
      dispatch(
        deleteContactError({
          message: error.message,
          error: error.response.status,
        }),
      );
    });
};

const exportedOperations = { addContact, deleteContact, fetchContacts };
export default exportedOperations;
