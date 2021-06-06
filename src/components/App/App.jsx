import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoadingContacts } = this.props;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoadingContacts && <h2>Loading...</h2>}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
