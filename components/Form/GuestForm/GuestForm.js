import { Formik, Form } from 'formik';
import { FormikTextField, FormikSelect, FormikCheckbox } from '../';
import { Button, Box, FormControl, FormLabel, FormGroup } from '@mui/material';
import { codeGenerator } from '../../../utils/utils';
import { useRouter } from 'next/router';
import * as yup from 'yup';

const FormField = ({ children }) => <Box>{children}</Box>;

const ButtonGroup = ({ children }) => (
  <Box display='flex' justifyContent={'flex-end'}>
    {children.map((child, i) => (
      <Box mr={i === children.length - 1 ? 0 : 1} key={i}>
        {child}
      </Box>
    ))}
  </Box>
);

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
      {({ setFieldValue, ...rest }) => {
        console.log(rest);
        return (
          <Form>
            <Box mt={3} display='flex' flexDirection={'column'} gap={3}>
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
                    sx={{ whiteSpace: 'nowrap', py: 2 }}
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

                <Box display='flex' gap={2}>
                  <FormikTextField name='songRec.title' label='Title' />
                  <FormikTextField name='songRec.artist' label='Group/Artist' />
                </Box>
              </FormField>

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
