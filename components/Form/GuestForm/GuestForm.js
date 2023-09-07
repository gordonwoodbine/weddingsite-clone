import { Formik, Form, FieldArray } from 'formik';
import {
  FormikTextField,
  FormikSelect,
  FormikCheckbox,
  ButtonGroup,
} from '../';
import {
  Button,
  Box,
  FormLabel,
  Grid,
  TextField,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { codeGenerator } from '../../../utils/utils';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { useEffect, useState } from 'react';

const FormField = ({ children }) => <Box>{children}</Box>;

const inviteOptions = {
  day: 'All Day',
  eve: 'Evening Event',
};

const schema = yup.object({
  name: yup.string().required('Name is required'),
  inviteType: yup
    .string()
    .required('Please select an invite type for this guest'),
  rsvpCode: yup.string().required('Please create an RSVP code for this guest'),
});

const GuestForm = ({ data, apiCall, submitText }) => {
  console.log('data', data);
  const router = useRouter();
  const [additionalGuest, setAdditionalGuest] = useState('');

  const handleSubmit = (values, { setSubmitting }) => {
    apiCall(values);
    setSubmitting(false);
  };

  // TODO - cancel click function that warns when form is dirty
  const handleCancel = (dirty) => {};

  const handleGenerateCode = (name, setFieldValue) => {
    const code = codeGenerator();
    setFieldValue(name, code);
  };

  const handleAddExtraGuest = (arrayHelpers) => {
    if (!additionalGuest) return;

    arrayHelpers.push({ name: additionalGuest, isAttending: false });
    setAdditionalGuest('');
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, ...rest }) => {
        console.log('values', values);
        return (
          <Form>
            <Box my={3} display='flex' flexDirection={'column'} gap={3}>
              <FormField>
                <FormikTextField name='name' label='Name' type='text' />
              </FormField>

              <FormField>
                <FormikSelect
                  name='inviteType'
                  label='Invite Type'
                  options={inviteOptions}
                />
              </FormField>

              <FormField>
                <Box display='flex' gap={2} alignItems='flex-start'>
                  <FormikTextField
                    name='rsvpCode'
                    label='RSVP Code'
                    type='text'
                  />
                  <Button
                    onClick={() =>
                      handleGenerateCode('rsvpCode', setFieldValue)
                    }
                    variant='contained'
                    sx={{ whiteSpace: 'nowrap', py: 2, minWidth: '120px' }}
                  >
                    Generate Code
                  </Button>
                </Box>
              </FormField>

              <FormField>
                <Box display='flex' gap={2}>
                  <FormikCheckbox name='isAttending' label='Is Attending?' />
                  <FormikCheckbox name='hasRsvpd' label="Has RSVP'd?" />
                </Box>
              </FormField>

              <FormField>
                <FormikTextField
                  name='dietryReqs'
                  label='Dietry Requirements'
                  multiline
                  rows={4}
                />
              </FormField>

              <FormField>
                <FormLabel sx={{ marginBottom: 2 }} component='legend'>
                  Song Suggestion
                </FormLabel>

                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <FormikTextField name='songRec.title' label='Title' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormikTextField
                      name='songRec.artist'
                      label='Group/Artist'
                    />
                  </Grid>
                </Grid>
              </FormField>

              <Divider />

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
                            <Divider
                              orientation='vertical'
                              variant='middle'
                              flexItem
                            />
                            <FormikCheckbox
                              name={`additionalGuests.${index}.isAttending`}
                              label='Is Attending?'
                              // sx={{ flex: 1 }}
                            />
                            <Divider
                              orientation='vertical'
                              variant='middle'
                              flexItem
                            />
                            <IconButton
                              onClick={() => arrayHelpers.remove(index)}
                            >
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

              {/* {values.additionalGuests.length ? (
                <Stack spacing={1}>
                  {values.additionalGuests.map((guest, i) => (
                    <FormField key={guest.name}>
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
                        <TextField
                          value={guest.name}
                          disabled
                          sx={{ flex: 1 }}
                        />
                        <Divider
                          orientation='vertical'
                          variant='middle'
                          flexItem
                        />
                        <FormikCheckbox
                          name={`additionalGuests[${i}].isAttending`}
                          label='Is Attending?'
                          // sx={{ flex: 1 }}
                        />
                        <Divider
                          orientation='vertical'
                          variant='middle'
                          flexItem
                        />
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </FormField>
                  ))}
                </Stack>
              ) : null}

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
                    onClick={() => handleAddExtraGuest(setFieldValue, values)}
                  >
                    Add
                  </Button>
                </Box>
              </FormField> */}

              <FormField>
                <ButtonGroup>
                  <Button variant='outlined' onClick={() => router.back()}>
                    Cancel
                  </Button>
                  <Button variant='contained' type='submit'>
                    {submitText}
                  </Button>
                </ButtonGroup>
              </FormField>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default GuestForm;
