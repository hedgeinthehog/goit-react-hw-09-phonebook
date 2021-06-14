const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const getErrorMessage = state => state.auth.error;

const exportedSelectors = { getIsAuthenticated, getUserEmail, getErrorMessage };
export default exportedSelectors;
