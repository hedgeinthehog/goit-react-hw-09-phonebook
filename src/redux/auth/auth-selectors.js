const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const getErrorMessage = state => state.auth.error;

export default { getIsAuthenticated, getUserEmail, getErrorMessage };
