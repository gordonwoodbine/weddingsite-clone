import { Dialog as MDialog, DialogTitle } from '@mui/material';

const Dialog = ({ props }) => {
  const { title, ...dialogProps } = props;
  return (
    <MDialog {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>
    </MDialog>
  );
};

export default Dialog;
