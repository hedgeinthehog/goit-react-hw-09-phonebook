import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../styled-components/Button';
import ContentBox from '../styled-components/ContentBox';
import Input from '../styled-components/Input';
import Label from '../styled-components/Label';
import FormField from '../styled-components/FormField';
import contactsOperations from '../../redux/contacts/contacts-operations';

const Form = ContentBox.withComponent('form');

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    const { createNewContact } = this.props;

    event.preventDefault();

    createNewContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </Label>
        </FormField>
        <FormField>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </Label>
        </FormField>
        <Button type="submit" bg="light" position="bottom">
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  createNewContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createNewContact: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
