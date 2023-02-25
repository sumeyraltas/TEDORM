
import AppBarForStudents from "./AppBarForStudent";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  //{ field: 'id', headerName: 'ID', width: 1 },
  {
    field: 'id',
    headerName: 'Days',
    width: 150,
    editable: true,
  },
  {
    field: 'breakfast',
    headerName: 'Breakfast',
    width: 350,
    editable: true,
  },
  {
    field: 'dinner',
    headerName: 'Dinner',
    width: 350,
    editable: true,
  },

];

const rows = [
  { id: 'Monday', breakfast: 'Tomato, Egg, Bagel..', dinner: 'Tomato Soup...', },
  { id: 'Tuesday', breakfast: 'Tomato, Egg, Bagel.', dinner: ' ' },
  { id: 'Wendsday', breakfast: 'Tomato, Egg, Bagel.', dinner: ' ' },
  { id: 'Thursday', breakfast: 'Tomato, Egg, Bagel.', dinner: ' ' },
];

function DinnerMenuForStudent() {
  return (
    <div>
      <AppBarForStudents />
      <Box sx={{
        height: "450px",
        width: "95vh", margin: "auto",
        marginTop: "5%",
        padding: "auto"
      }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}
export default DinnerMenuForStudent;