import { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './RegisterForm.module.css';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

class RegisterForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (!/^.{8,}$/.test(values.password)) {
            errors.password = 'Password must be at least 8 characters long';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { name, email, password } = values;
          setTimeout(() => {
            this.props.onRegister({ name, email, password });
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form onSubmit={submitForm}>
            <Field
              component={TextField}
              name="name"
              type="text"
              label="Name"
              className={styles.input}
            />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              className={styles.input}
            />

            <Field
              component={TextField}
              name="password"
              type="password"
              label="Password"
              className={styles.input}
            />
            {isSubmitting && <LinearProgress />}
            <Button
              type="submit"
              disabled={isSubmitting}
              onClick={submitForm}
              className={styles.button}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
