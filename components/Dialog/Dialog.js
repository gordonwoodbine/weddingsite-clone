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
    <MDialog {...dialogProps}>
      <DialogTitle {...titleProps}>{title}</DialogTitle>
      {content ? <DialogContent>{content}</DialogContent> : null}
      {dialogActions ? <DialogActions>{dialogActions}</DialogActions> : null}
    </MDialog>
  );
};

export default Dialog;
