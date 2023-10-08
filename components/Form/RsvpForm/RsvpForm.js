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
import axios from 'axios';

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

const RsvpForm = ({ data, apiCall, handleClose, onSuccessCallback }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    const submission = {
      ...values,
      hasRsvpd: true,
    };
    axios
      .post('/api/rsvp/update', submission)
      .then((res) => {
        setSubmitting(false);
        handleClose();
        onSuccessCallback();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values, isSubmitting }) => {
        return (
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
                          marginBottom: '1rem',
                          fontWeight: 'bolder',
                        }}
                      >
                        Do you have any dietry requirements we should be aware
                        of?
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
                  <FormControl>
                    <FormLabel
                      sx={{ marginBottom: '1rem', fontWeight: 'bolder' }}
                    >
                      Your invitation also includes the following people. Please
                      can you indicate if they will be attending?
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
                  </FormControl>
                </Paper>

                <ButtonGroup>
                  <Button
                    variant='outlined'
                    onClick={handleClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button variant='contained' type='submit'>
                    Submit
                  </Button>
                </ButtonGroup>
              </Box>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RsvpForm;
