import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const Filter = ({ value, onChange }) => (
  <Box className={styles.box}>
    <TextField
      name="filter"
      value={value}
      onChange={onChange}
      label="Find contacts by name"
      className={styles.input}
    />
  </Box>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.updateFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
