import { Button } from '@mui/material';

const DialogActions = ({ close, declineText, confirm, confirmText }) => {
  return (
    <>
      <Button variant='outlined' onClick={close}>
        {declineText}
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          confirm();
          close();
        }}
      >
        {confirmText}
      </Button>
    </>
  );
};

export default DialogActions;
