import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactsView.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';

const ContactsView = () => {
  const isLoadingContacts = useSelector(contactsSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const source = axios.CancelToken.source();

    dispatch(contactsOperations.fetchContacts({ cancelToken: source.token }));

    return () => {
      source.cancel();
    };
  }, [dispatch]);

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
};

export default ContactsView;
