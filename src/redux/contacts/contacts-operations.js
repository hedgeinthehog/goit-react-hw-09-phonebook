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

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = id => (dispatch, getState) => {
  const state = getState();

  dispatch(deleteContactRequest());

  const shownContactsCount =
    contactsSelectors.getFilteredContacts(state).length;
  if (shownContactsCount === 1) dispatch(updateFilter(''));

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export default { addContact, deleteContact, fetchContacts };
