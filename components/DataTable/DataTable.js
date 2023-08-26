import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows, columns }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
    />
  );
};

export default DataTable;
