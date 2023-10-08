import { TextField } from '@mui/material';
import { useField } from 'formik';

const FormikTextField = ({ name, ...rest }) => {
  const [field, meta] = useField(name);

  const config = {
    fullWidth: true,
    variant: 'outlined',
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return <TextField {...config} />;
};

export default FormikTextField;
