import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import IconButton from '@material-ui/core/IconButton';
// import Delete from '@material-ui/icons/Delete';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id} className={styles.listItem}>
          {name} {number}
          {/* <IconButton
            type="button"
            aria-label="delete"
            name={id}
            onClick={deleteContact}
            className={styles.deleteBtn}
          >
            <Delete />
          </IconButton> */}
          <button
            type="button"
            name={id}
            onClick={deleteContact}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filteredContacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: e => dispatch(contactsOperations.deleteContact(e.target.name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
