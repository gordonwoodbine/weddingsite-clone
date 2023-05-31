import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';

const Admin = () => {
  const router = useRouter();
  const basePath = 'http://localhost:3000';

  return (
    <Box mt={3}>
      <Button
        variant='contained'
        onClick={() => router.push(`${basePath}/admin/addGuest/`)}
      >
        Add New Guest
      </Button>
    </Box>
  );
};

export default Admin;
