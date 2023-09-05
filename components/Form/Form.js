import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
} from '@mui/material';
import { codeGenerator } from '../../utils/utils';

const FormField = (props) => (
  <TextField variant='outlined' sx={{ marginBottom: '1rem' }} {...props} />
);

const Form = ({ formId, userData, newUser = true, apiCall, submitText }) => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    inviteType: userData.inviteType,
    rsvpCode: userData.rsvpCode,
    hasRsvpd: userData.hasRsvpd,
    isAttending: userData.isAttending,
    dietryReqs: userData.dietryReqs,
    songRec: {
      title: 'Bat Out of Hell',
      artist: 'Meatloaf',
    },
  });

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
    apiCall(formData);
    setIsSubmitting(false);
  };

  return (
    <Box mt={3} display='flex' flexDirection={'column'} id={formId}>
      <FormField
        label='Name'
        name='name'
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        select
        label='Invite Type'
        name='inviteType'
        value={formData.inviteType}
        onChange={handleChange}
        sx={{ marginBottom: '1rem' }}
      >
        <MenuItem value='allDay'>All Day</MenuItem>
        <MenuItem value='evening'>Evening Only</MenuItem>
      </FormField>
      <Box display='flex' alignItems={'stretch'}>
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
      <Box display='flex' sx={{ marginTop: '.5rem' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isAttending}
              onChange={handleChange}
              name='isAttending'
            />
          }
          label='Is Attending?'
          sx={{ marginBottom: '1rem' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.hasRsvpd}
              onChange={handleChange}
              name='hasRsvpd'
            />
          }
          label="Has RSVP'd?"
          sx={{ marginBottom: '1rem' }}
        />
      </Box>
      <Paper elevation={3} sx={{ marginBottom: '1rem' }}>
        <FormGroup
          sx={{
            padding: '1rem',
            paddingBottom: 0,
            borderRadius: '4px',
          }}
        >
          <FormLabel sx={{ mb: 1.5 }}>Song Recommendation</FormLabel>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormField label='Artist' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField label='Title' fullWidth />
            </Grid>
          </Grid>
        </FormGroup>
      </Paper>
      <FormField
        multiline
        rows={4}
        label='Dietry Requirements'
        name='dietryReqs'
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
          {submitText}
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
