import { Box, FormLabel, Grid } from '@mui/material';
import FormikTextField from '../TextField';

const FormField = ({ children }) => <Box>{children}</Box>;

const Song = () => (
  <FormField>
    <FormLabel
      sx={{ marginBottom: '1rem', fontWeight: 'bolder' }}
      component='legend'
    >
      Song Suggestion
    </FormLabel>

    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <FormikTextField name='songRec.title' label='Title' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormikTextField name='songRec.artist' label='Group/Artist' />
      </Grid>
    </Grid>
  </FormField>
);

export default Song;
