import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

const RSVP = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const contentType = 'application/json';

  const validateCode = async (val) => {
    const res = await fetch('http://localhost:3000/api/rsvp/validate', {
      method: 'POST',
      headers: {
        Accept: contentType,
        'Content-Type': contentType,
      },
      body: JSON.stringify(value),
    });
    console.log(res);
  };

  const handleChange = ({ target }) => {
    setError('');
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setError('RSVP Code is required');
      return;
    }
    validateCode(value);
  };

  return (
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
      <Button type='submit' variant='contained'>
        Submit
      </Button>
    </Box>
  );
};

export default RSVP;
