import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Dialog from '../components/Dialog';
import RsvpForm from '../components/Form/RsvpForm/RsvpForm';
import DialogActions from '../components/Dialog/DialogActions';

const RSVP = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const contentType = 'application/json';

  const handleDialogClose = () => {
    setDialogProps({
      ...dialogProps,
      open: false,
    });
  };

  const [dialogProps, setDialogProps] = useState({
    open: false,
    onClose: handleDialogClose,
  });

  const onSuccessCallback = () => {
    setDialogProps({
      open: true,
      title: 'Thank you for your response',
      content: <Typography>Ta very much like</Typography>,
      onClose: handleDialogClose,
      dialogActions: <Button onClick={handleDialogClose}>Close</Button>,
    });
  };

  const validateCode = async (val) => {
    try {
      const res = await fetch('http://localhost:3000/api/rsvp/validate', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
      handleResponse(data);
    } catch (err) {
      console.log('err', err);
    }
  };

  const parseData = (data, token) => ({
    ...data,
    token,
    isAttending: true,
  });

  const handleResponse = (data) => {
    if (data.success) {
      const parsedData = parseData(data.guest, data.token);
      setDialogProps({
        ...dialogProps,
        title: "RSVP for Liam and Leah's wedding",
        titleProps: {
          sx: {
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: '1',
            fontFamily: 'Tangerine, sans-serif',
          },
        },
        open: true,
        fullWidth: true,
        maxWidth: 'lg',
        onClose: () => {},
        content: (
          <RsvpForm
            data={parsedData}
            handleClose={handleDialogClose}
            onSuccessCallback={onSuccessCallback}
          />
        ),
      });
    }
    setButtonDisabled(false);
  };

  const handleChange = ({ target }) => {
    setError('');
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    if (!value) {
      setError('RSVP Code is required');
      setButtonDisabled(false);
      return;
    }
    validateCode(value);
  };

  return (
    <>
      <Box
        mt={3}
        component='form'
        onSubmit={handleSubmit}
        display='flex'
        flexDirection={'column'}
        alignItems={'center'}
      >
        <TextField
          sx={{ minWidth: '250px', marginBottom: '1rem' }}
          label='Please enter your RSVP Code'
          value={value}
          onChange={handleChange}
          helperText={error}
          error={Boolean(error)}
        />
        <Button type='submit' variant='contained' disabled={buttonDisabled}>
          Submit
        </Button>
      </Box>
      <Dialog {...dialogProps} />
    </>
  );
};

export default RSVP;
