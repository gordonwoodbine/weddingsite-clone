import {
  Dialog as MDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const Dialog = ({ onConfirm, dialogActions, ...props }) => {
  const { title, content, titleProps, ...dialogProps } = props;
  return (
    <MDialog
      {...dialogProps}
      PaperProps={{ sx: { backgroundColor: 'rgba(255, 255, 255, 0.96)' } }}
    >
      <DialogTitle {...titleProps}>{title}</DialogTitle>
      {content ? <DialogContent>{content}</DialogContent> : null}
      {dialogActions ? <DialogActions>{dialogActions}</DialogActions> : null}
    </MDialog>
  );
};

export default Dialog;
