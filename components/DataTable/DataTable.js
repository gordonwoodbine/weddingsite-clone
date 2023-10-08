import { Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const NoData = () => (
  <Stack height='100%' alignItems={'center'} justifyContent={'center'}>
    <Typography>No Data to Display</Typography>
  </Stack>
);

const DataTable = ({ rows, columns }) => {
  return (
    <DataGrid
      sx={{ height: rows.length ? 'inherit' : '200px' }}
      rows={rows}
      columns={columns}
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      slots={{
        noRowsOverlay: NoData,
      }}
    />
  );
};

export default DataTable;
