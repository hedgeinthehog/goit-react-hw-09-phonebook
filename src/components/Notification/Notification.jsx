import React from 'react';
import { connect } from 'react-redux';
import alertSelectors from '../../redux/alert/alert-selectors';
import { hideAlert } from '../../redux/alert/alert-actions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification = ({
  isNotificationVisible,
  message,
  onCloseAlert,
  severity,
}) => {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

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

const mapStateToProps = state => ({
  isNotificationVisible: alertSelectors.isAlertOpen(state),
  message: alertSelectors.alertMessage(state),
  severity: alertSelectors.alertType(state),
});

const mapDispatchToProps = {
  onCloseAlert: hideAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
