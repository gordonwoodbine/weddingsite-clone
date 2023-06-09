import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import dbConnect from '../../lib/dbConnect';
import Guest from '../../lib/models/Guest';
import DataTable from '../../components/DataTable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Admin = ({ guests }) => {
  const router = useRouter();
  const basePath = 'http://localhost:3000';

  const columns = [
    {
      field: 'name',
      headerName: 'Guest Name',
      width: 200,
    },
    {
      field: 'inviteType',
      headerName: 'Invite Type',
      width: 200,
    },
    {
      field: 'rsvpCode',
      headerName: 'RSVP Code',
    },
    {
      field: 'isAttending',
      headerName: 'Is Attending?',
      align: 'center',
      sortable: false,
      renderCell: ({ row }) =>
        row.isAttending ? (
          <CheckCircleIcon sx={{ color: 'green' }} />
        ) : (
          <CancelIcon sx={{ color: 'crimson' }} />
        ),
    },
  ];

  return (
    <Box mt={3}>
      <Box display={'flex'} justifyContent={'flex-end'}>
        <Button
          variant='contained'
          onClick={() => router.push(`${basePath}/admin/addGuest/`)}
        >
          Add New Guest
        </Button>
      </Box>
      <Box mt={2}>
        <DataTable rows={guests} columns={columns} />
      </Box>
    </Box>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const res = await Guest.find({});
  const guests = res.map((doc) => {
    const guest = doc.toObject();
    guest._id = guest._id.toString();
    guest.id = guest._id;
    return guest;
  });

  return { props: { guests } };
}

export default Admin;
