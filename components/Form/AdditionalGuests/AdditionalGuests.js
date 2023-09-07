import { useState } from 'react';
import { FieldArray } from 'formik';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import FormikTextField from '../TextField';
import FormikCheckbox from '../Checkbox';

const FormField = ({ children }) => <Box>{children}</Box>;

const AdditionalGuests = ({ values }) => {
  const [additionalGuest, setAdditionalGuest] = useState('');

  const handleAddExtraGuest = (arrayHelpers) => {
    if (!additionalGuest) return;

    arrayHelpers.push({ name: additionalGuest, isAttending: false });
    setAdditionalGuest('');
  };

  return (
    <FieldArray
      name='additionalGuests'
      render={(arrayHelpers) => (
        <>
          <Stack spacing={1}>
            {values.additionalGuests.map((guest, index) => (
              <FormField key={index}>
                <Box
                  gap={2}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    padding: 1,
                    border: '1px solid #ddd',
                    borderRadius: 1,
                    '& hr': {
                      mx: 0.5,
                    },
                  }}
                >
                  <FormikTextField
                    name={`additionalGuests.${index}.name`}
                    sx={{ flex: 1 }}
                  />
                  <Divider orientation='vertical' variant='middle' flexItem />
                  <FormikCheckbox
                    name={`additionalGuests.${index}.isAttending`}
                    label='Is Attending?'
                    // sx={{ flex: 1 }}
                  />
                  <Divider orientation='vertical' variant='middle' flexItem />
                  <IconButton onClick={() => arrayHelpers.remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </FormField>
            ))}
          </Stack>
          <FormField>
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
                onClick={() => handleAddExtraGuest(arrayHelpers)}
              >
                Add
              </Button>
            </Box>
          </FormField>
        </>
      )}
    />
  );
};

export default AdditionalGuests;
