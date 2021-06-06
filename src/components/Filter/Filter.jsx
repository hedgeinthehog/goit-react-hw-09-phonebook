import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentBox from '../styled-components/ContentBox';
import Label from '../styled-components/Label';
import Input from '../styled-components/Input';
import * as actions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Filter = ({ value, onChange }) => (
  <ContentBox>
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  </ContentBox>
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
