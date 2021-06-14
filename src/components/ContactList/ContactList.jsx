import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

const ContactList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  const onDelete = useCallback(
    e => {
      dispatch(contactsOperations.deleteContact(e.currentTarget.name));
    },
    [dispatch],
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id} className={styles.listItem}>
          {name} {number}
          <IconButton
            type="button"
            aria-label="delete"
            name={id}
            onClick={onDelete}
            className={styles.deleteBtn}
          >
            <Delete />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
