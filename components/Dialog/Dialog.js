import {
  Dialog as MDialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const Dialog = ({ onConfirm, ...props }) => {
  const { title, content, ...dialogProps } = props;
  return (
    <MDialog {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>
      {content ? (
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
      ) : null}
      <DialogActions>
        <Button variant='outlined' onClick={() => dialogProps.onClose()}>
          No
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            dialogProps.onConfirm();
            dialogProps.onClose();
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </MDialog>
  );
};

export default Dialog;
