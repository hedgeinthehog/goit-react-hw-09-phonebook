import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactsView.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';

class ContactsView extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoadingContacts } = this.props;

    return (
      <>
        <h1 className={styles.title}>Phonebook</h1>
        <div className={styles.wrapper}>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
          <div className={styles.contactsWrapper}>
            <h2>Contacts</h2>
            <Filter />
            {isLoadingContacts && <LinearProgress />}
            <ContactList />
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
