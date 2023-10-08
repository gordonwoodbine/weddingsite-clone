import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

const AddAdditionalGuest = ({ arrayHelpers }) => {
  const [additionalGuest, setAdditionalGuest] = useState('');

  const handleAddExtraGuest = () => {
    if (!additionalGuest) return;

    arrayHelpers.push({ name: additionalGuest, isAttending: false });
    setAdditionalGuest('');
  };

  return (
    <Box display='flex' gap={2} alignItems={'center'}>
      <TextField
        variant='outlined'
        fullWidth
        value={additionalGuest}
        onChange={(e) => setAdditionalGuest(e.target.value)}
        label='Add Additional Invitee'
      />
      <Button
        variant='contained'
        sx={{ py: 2, minWidth: '120px' }}
        onClick={() => handleAddExtraGuest()}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddAdditionalGuest;
