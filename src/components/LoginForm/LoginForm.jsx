import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './LoginForm.module.css';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;

        setTimeout(() => {
          dispatch(authOperations.login({ email, password }));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
            className={styles.input}
          />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
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
};

export default LoginForm;
