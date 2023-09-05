import { useRouter } from 'next/router';
import { Box, Button, CircularProgress } from '@mui/material';
import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';

import DataTable from '../../components/DataTable';
import { getColumnData } from './columnData';
import { fetcher } from '../../utils/utils';

const Admin = () => {
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_URL;
  const { mutate } = useSWRConfig();

  const { data, error, isLoading } = useSWR('api/guests', fetcher);

  const deleteGuest = (id) => {
    axios
      .delete(`/api/guests/${id}`)
      .then((res) => {
        mutate('api/guests');
      })
      .catch((err) => console.log(err));
  };

  const columns = getColumnData(basePath, deleteGuest);

  return (
    <Box mt={3}>
      {data ? (
        <>
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Button
              variant='contained'
              onClick={() => router.push(`${basePath}/admin/addGuest/`)}
            >
              Add New Guest
            </Button>
          </Box>
          <Box mt={2}>
            <DataTable rows={data} columns={columns} />
          </Box>
        </>
      ) : isLoading ? (
        <CircularProgress />
      ) : error ? (
        <div>Error!</div>
      ) : null}
    </Box>
  );
};

export default Admin;
