import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@mui/material';
import { useField, useFormikContext } from 'formik';

const FormikCheckbox = ({ name, label, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => setFieldValue(name, e.target.checked);

  const config = {
    onChange: handleChange,
    checked: field.value,
    ...field,
    ...rest,
  };

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel control={<Checkbox {...config} />} label={label} />
      </FormGroup>
    </FormControl>
  );
};

export default FormikCheckbox;
