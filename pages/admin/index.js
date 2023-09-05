import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import DataTable from '../../components/DataTable';
import { getColumnData } from './columnData';
import { useState } from 'react';

const Admin = () => {
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_URL;
  const [guests, setGuests] = useState(null);

  const columns = getColumnData(basePath);

  const g = fetch(`${basePath}/api/guests`)
    .then((res) => res.json())
    .then(({ data }) => {
      const dataWithIds = data.map((el) => ({
        ...el,
        id: el._id,
      }));
      setGuests(dataWithIds);
    });

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
      {guests ? (
        <Box mt={2}>
          <DataTable rows={guests} columns={columns} />
        </Box>
      ) : null}
    </Box>
  );
};

// export async function getServerSideProps() {
//   await dbConnect();

//   const res = await Guest.find({});
//   const guests = res.map((doc) => {
//     const guest = doc.toObject();
//     guest._id = guest._id.toString();
//     guest.id = guest._id;
//     return guest;
//   });

//   return { props: { guests } };
// }

export default Admin;
