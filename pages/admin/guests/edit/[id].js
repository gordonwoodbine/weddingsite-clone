import { useRouter } from 'next/router';
import Form from '../../../../components/Form';
import { Box, CircularProgress } from '@mui/material';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/utils';

const EditGuest = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/guests/${id}`, fetcher);

  return (
    <Box>{data ? <Form formId='edit-guest-form' userData={data} /> : null}</Box>
  );
};

export default EditGuest;
