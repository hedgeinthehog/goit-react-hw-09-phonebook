import { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './LoginView.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Box className={styles.box}>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
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
            className={styles.input}
          />
          <Button type="submit" className={styles.button}>
            Log in
          </Button>
        </form>
      </Box>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
