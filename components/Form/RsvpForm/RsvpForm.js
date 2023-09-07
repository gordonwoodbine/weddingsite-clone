import {
  Typography,
  Button,
  Paper as MPaper,
  Box,
  Container,
  FormControl,
  FormLabel,
} from '@mui/material';
import { Formik, Form, FieldArray } from 'formik';
import * as yup from 'yup';

import { FormikRadioGroup, ButtonGroup, FormikTextField } from '../';
import Song from '../Song';
import AdditionalGuestsLists from '../AdditionalGuests/AdditionalGuestsList';

const options = [
  {
    value: true,
    label: 'I would be delighted to attend',
  },
  {
    value: false,
    label: 'I will unfortunately not be able to attend',
  },
];

const Paper = ({ children }) => (
  <MPaper elevation={2} sx={{ padding: 2 }}>
    {children}
  </MPaper>
);

const RsvpForm = ({ data, apiCall, handleClose }) => {
  const handleSubmit = (values, actions) => {
    console.log('values', values);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <Container maxWidth='md'>
            <Box display='flex' flexDirection='column' gap={3}>
              <Box display='flex' justifyContent={'center'}>
                <Typography sx={{ maxWidth: '350px', textAlign: 'center' }}>
                  We hope you can make it and we appreciate your prompt reply
                </Typography>
              </Box>
              <Paper>
                <FormikRadioGroup name='isAttending' options={options} />
              </Paper>
              <>
                <Paper>
                  <FormControl sx={{ width: '100%' }}>
                    <FormLabel
                      sx={{
                        marginBottom: '1.5rem',
                      }}
                    >
                      Do you have any dietry requirements we should be aware of?
                    </FormLabel>
                    <FormikTextField
                      name='dietryReqs'
                      label='Dietry Requirements'
                      multiline={true}
                      rows={3}
                    />
                  </FormControl>
                </Paper>
              </>

              <Paper>
                <Song />
              </Paper>

              <Paper>
                <FormLabel>
                  Your invitation also includes the following people. Please can
                  you indicate if they will be attending?
                </FormLabel>
                <FieldArray
                  name='additionalGuests'
                  render={(arrayHelpers) => (
                    <AdditionalGuestsLists
                      values={values}
                      arrayHelpers={arrayHelpers}
                      editingDisabled={true}
                    />
                  )}
                />
              </Paper>

              <ButtonGroup>
                <Button variant='outlined' onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant='contained' type='submit'>
                  Submit
                </Button>
              </ButtonGroup>
            </Box>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default RsvpForm;
