import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Button, Box, FormLabel, Grid, Divider } from '@mui/material';

import {
  FormikTextField,
  FormikSelect,
  FormikCheckbox,
  ButtonGroup,
} from '../';
import { codeGenerator } from '../../../utils/utils';
import AdditionalGuests from '../AdditionalGuests';

const FormField = ({ children }) => <Box>{children}</Box>;

const inviteOptions = {
  day: 'All Day',
  eve: 'Evening Only',
};

const schema = yup.object({
  name: yup.string().required('Name is required'),
  inviteType: yup
    .string()
    .required('Please select an invite type for this guest'),
  rsvpCode: yup.string().required('Please create an RSVP code for this guest'),
});

const GuestForm = ({ data, apiCall, submitText }) => {
  const router = useRouter();

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

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => {
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

              <AdditionalGuests values={values} />

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
