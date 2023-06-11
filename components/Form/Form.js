import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { codeGenerator } from '../../utils/utils';

const useStyles = makeStyles({
  formField: {
    // marginTop: '1rem',
    marginBottom: '1rem',
  },
});

const Form = ({ formId, userData, newUser = true }) => {
  const classes = useStyles();
  const router = useRouter();
  const contentType = 'application/json';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    inviteType: userData.inviteType,
    rsvpCode: userData.rsvpCode,
    isAttending: userData.isAttending,
    dietryReqs: userData.dietryReqs,
  });

  const postData = async (form) => {
    try {
      const res = await fetch('http://localhost:3000/api/guests', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      console.log('hi');
      router.push('/admin');
    } catch (err) {
      console.log('error', err);
      setIsSubmitting(false);
    }
  };

  const generateCode = () => {
    const code = codeGenerator();
    setFormData({
      ...formData,
      rsvpCode: code,
    });
  };

  const handleChange = ({ target }) => {
    const { type, name } = target;
    const val = type === 'checkbox' ? target.checked : target.value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    postData(formData);
  };

  return (
    <Box mt={3} display='flex' flexDirection={'column'}>
      <TextField
        variant='outlined'
        label='Name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        className={classes.formField}
      />
      <TextField
        variant='outlined'
        label='Invite Type'
        name='inviteType'
        value={formData.inviteType}
        onChange={handleChange}
        className={classes.formField}
      />
      <Box display='flex' alignItems={'stretch'} className={classes.formField}>
        <TextField
          variant='outlined'
          label='RSVP Code'
          name='rsvpCode'
          fullWidth
          value={formData.rsvpCode}
          onChange={handleChange}
          sx={{ mr: 2 }}
        />
        <Button
          variant='contained'
          sx={{ whiteSpace: 'nowrap' }}
          onClick={generateCode}
        >
          Generate Code
        </Button>
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            value={formData.isAttending}
            onChange={handleChange}
            name='isAttending'
          />
        }
        label='Is Attending?'
        className={classes.formField}
      />
      <TextField
        variant='outlined'
        multiline
        rows={4}
        label='Dietry Requirements'
        name='dietryReqs'
        className={classes.formField}
        value={formData.dietryReqs}
        onChange={handleChange}
      />
      <Box display='flex' justifyContent={'flex-end'}>
        <Button
          sx={{ mr: 2 }}
          variant='contained'
          color='secondary'
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Add New Guest
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
