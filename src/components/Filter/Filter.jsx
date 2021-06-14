import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onUpdateFilter = useCallback(
    e => {
      dispatch(actions.updateFilter(e.target.value));
    },
    [dispatch],
  );

  return (
    <Box className={styles.box}>
      <TextField
        name="filter"
        value={value}
        onChange={onUpdateFilter}
        label="Find contacts by name"
        className={styles.input}
      />
    </Box>
  );
};

export default Filter;
