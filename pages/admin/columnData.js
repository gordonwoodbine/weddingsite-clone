import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, IconButton, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

const inviteOptions = {
  day: 'All Day',
  eve: 'Evening Only',
};

export const getColumnData = (basePath, deleteCallback) => {
  const router = useRouter();
  const theme = useTheme();
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
      valueGetter: (params) => inviteOptions[params.row.inviteType],
    },
    {
      field: 'hasRsvpd',
      headerName: "Has RSVP'd?",
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: ({ row }) =>
        row.hasRsvpd ? (
          <CheckCircleIcon sx={{ color: '#5ce31e' }} />
        ) : (
          <CancelIcon sx={{ color: theme.palette.error.main }} />
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
          <CheckCircleIcon sx={{ color: '#5ce31e' }} />
        ) : (
          <CancelIcon sx={{ color: theme.palette.error.main }} />
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
        <Grid container direction='row'>
          <Grid item>
            <IconButton
              onClick={() =>
                router.push(`${basePath}/admin/guests/edit/${row.id}`)
              }
            >
              <VisibilityIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              sx={{ color: theme.palette.error.main }}
              onClick={() => deleteCallback(row)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
  ];

  return columns;
};
