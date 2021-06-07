import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { paths } from '../../router/routes';
import authSelectors from '../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => (
  <div>
    <NavLink to={paths.home}>Home</NavLink>
    {isAuthenticated && <NavLink to={paths.contacts}>Contacts</NavLink>}
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
