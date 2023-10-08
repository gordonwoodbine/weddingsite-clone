import { MenuItem, TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const FormikSelect = ({ name, options, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };

  const config = {
    select: true,
    fullWidth: true,
    variant: 'outlined',
    onChange: handleChange,
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return (
    <TextField {...config}>
      {Object.keys(options).map((item, index) => (
        <MenuItem key={item} value={item}>
          {options[item]}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FormikSelect;
