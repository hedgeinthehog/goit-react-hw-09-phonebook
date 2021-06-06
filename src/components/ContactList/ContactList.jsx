import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../styled-components/Button';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} {number}
          <Button
            type="button"
            name={id}
            onClick={deleteContact}
            size="small"
            bg="dark"
            position="right"
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
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
