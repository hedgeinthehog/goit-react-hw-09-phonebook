const isAlertOpen = state => state.alert.isOpen;

const alertMessage = state => state.alert.message;

const alertType = state => state.alert.type;

const exportedSelectors = { isAlertOpen, alertMessage, alertType };
export default exportedSelectors;
