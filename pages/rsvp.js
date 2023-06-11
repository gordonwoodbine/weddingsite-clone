import { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import Dialog from '../components/Dialog';

const RSVP = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);
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

  const handleResponse = (data) => {
    console.log('data', data);
    if (data.success) {
      setToken(data.token);
      setDialogProps({
        ...dialogProps,
        title: 'hello to you',
        open: true,
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
      <Dialog props={dialogProps} />
    </>
  );
};

export default RSVP;
