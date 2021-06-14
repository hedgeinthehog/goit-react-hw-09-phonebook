import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import styles from './ContactForm.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(`Field with name ${name} is not being supported`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(contactsOperations.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box className={styles.box}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          label="Name"
          className={styles.input}
        />
        <TextField
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          label="Number"
          className={styles.input}
        />
        <Button type="submit" className={styles.button}>
          Add contact
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
