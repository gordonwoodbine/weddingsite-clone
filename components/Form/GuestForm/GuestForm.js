import { Formik, Form } from 'formik';
import FormikTextField from '../TextField/TextField';
import FormikSelect from '../Select/Select';
import { Button, TextField, Box } from '@mui/material';
import { codeGenerator } from '../../../utils/utils';

const FormField = ({ children }) => <Box mb={2}>{children}</Box>;

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

const GuestForm = ({ data, schema }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

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
      {({ setFieldValue }) => {
        return (
          <Form>
            <Box mt={3} display='flex' flexDirection={'column'}>
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
                <Box display='flex' gap={2}>
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
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    Generate Code
                  </Button>
                </Box>
              </FormField>

              <FormField>
                <ButtonGroup>
                  <Button variant='outlined'>Cancel</Button>
                  <Button variant='contained' type='submit'>
                    Submit
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
