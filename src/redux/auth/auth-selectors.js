const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const getErrorMessage = state => state.auth.error;

const isLoading = state => state.auth.loading;

const exportedSelectors = {
  getIsAuthenticated,
  getUserEmail,
  getErrorMessage,
  isLoading,
};
export default exportedSelectors;
