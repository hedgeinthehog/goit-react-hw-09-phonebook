import { createSelector } from '@reduxjs/toolkit';

const getIsLoading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const exportedSelectors = { getIsLoading, getFilter, getFilteredContacts };
export default exportedSelectors;
