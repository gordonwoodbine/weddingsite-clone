import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';

export const getColumnData = (basePath) => {
  const columns = [
    {
      field: 'name',
      headerName: 'Guest Name',
      width: 200,
      flex: 1,
    },
    {
      field: 'inviteType',
      headerName: 'Invite Type',
      width: 200,
      flex: 1,
    },
    {
      field: 'hasRsvpd',
      headerName: "Has RSVP'd?",
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: ({ row }) =>
        row.hasRsvpd ? (
          <CheckCircleIcon sx={{ color: 'green' }} />
        ) : (
          <CancelIcon sx={{ color: 'crimson' }} />
        ),
      flex: 1,
    },
    {
      field: 'isAttending',
      headerName: 'Is Attending?',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: ({ row }) =>
        row.isAttending ? (
          <CheckCircleIcon sx={{ color: 'green' }} />
        ) : (
          <CancelIcon sx={{ color: 'crimson' }} />
        ),
      flex: 1,
    },
    {
      field: 'tableActions',
      headerName: 'Actions',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: ({ row }) => (
        <IconButton
          color='primary'
          onClick={() => router.push(`${basePath}/admin/guests/edit/${row.id}`)}
        >
          <VisibilityIcon />
        </IconButton>
      ),
    },
  ];

  return columns;
};
