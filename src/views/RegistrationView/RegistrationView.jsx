import { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './RegistrationView.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

class RegistrationView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Box className={styles.box}>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Name"
            className={styles.input}
          />
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            className={styles.input}
          />
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            placeholder="minimum 7 symbols"
            className={styles.input}
          />
          <Button type="submit" className={styles.button}>
            Register
          </Button>
        </form>
      </Box>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegistrationView);
