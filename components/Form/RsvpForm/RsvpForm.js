import { Typography, Button, Paper, Box, Container } from '@mui/material';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { FormikRadioGroup, ButtonGroup } from '../';

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

const RsvpForm = ({ data, apiCall, handleClose }) => {
  console.log('data', data);
  const handleSubmit = (values, actions) => {
    console.log('values', values);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {(actions) => (
        <Form>
          <Container maxWidth='md'>
            <Box display='flex' flexDirection='column' gap={3}>
              <Typography>
                We hope you can make it and we appreciate your reply
              </Typography>
              <Paper elevation={2} sx={{ padding: 2 }}>
                <FormikRadioGroup name='isAttending' options={options} />
              </Paper>
              <ButtonGroup>
                <Button variant='outlined' onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant='contained'>Submit</Button>
              </ButtonGroup>
            </Box>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default RsvpForm;
