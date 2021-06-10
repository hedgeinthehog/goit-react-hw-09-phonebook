const isAlertOpen = state => state.alert.isOpen;

const alertMessage = state => state.alert.message;

const alertType = state => state.alert.type;

export default { isAlertOpen, alertMessage, alertType };
