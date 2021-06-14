import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import alertSelectors from '../../redux/alert/alert-selectors';
import { hideAlert } from '../../redux/alert/alert-actions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification = () => {
  const isNotificationVisible = useSelector(alertSelectors.isAlertOpen);
  const message = useSelector(alertSelectors.alertMessage);
  const severity = useSelector(alertSelectors.alertType);
  const dispatch = useDispatch();

  const onCloseAlert = () => dispatch(hideAlert());

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onCloseAlert();
  };

  return (
    <Snackbar
      open={isNotificationVisible}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
