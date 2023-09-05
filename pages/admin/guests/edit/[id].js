import { useRouter } from 'next/router';
import Form from '../../../../components/Form';
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

  const { data, error, isLoading } = useSWR(`/api/guests/${id}`, fetcher);

  return (
    <Box>
      {data ? (
        <Form
          formId='edit-guest-form'
          userData={data}
          apiCall={updateGuest}
          submitText='Update Guest'
        />
      ) : null}
    </Box>
  );
};

export default EditGuest;
