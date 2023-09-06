import { useRouter } from 'next/router';
import Form from '../../../../components/Form';
import * as yup from 'yup';
import GuestForm from '../../../../components/Form/GuestForm/GuestForm';
import { Box, CircularProgress } from '@mui/material';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '../../../../utils/utils';
import axios from 'axios';

const EditGuest = () => {
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = useSWRConfig();

  const updateGuest = (data) => {
    try {
      axios.put(`/api/guests/${id}`, data).then((res) => {
        mutate(`/api/guests/${id}`);
        router.push('/admin');
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  const schema = yup.object({
    name: yup.string().required('Name is required'),
    inviteType: yup
      .string()
      .required('Please select an invite type for this guest'),
    rsvpCode: yup
      .string()
      .required('Please create an RSVP code for this guest'),
  });

  const { data, error, isLoading } = useSWR(`/api/guests/${id}`, fetcher);
  console.log('data', data);

  return (
    <Box>
      {data ? (
        <GuestForm
          data={data}
          schema={schema}
          apiCall={updateGuest}
          submitText={'Update Guest'}
        />
      ) : null}
    </Box>
  );
};

export default EditGuest;
