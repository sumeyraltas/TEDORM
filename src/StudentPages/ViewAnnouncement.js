
import AppBarForStudents from "./AppBarForStudent";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/system";
const columns = [
    //{ field: 'id', headerName: 'ID', width: 1 },
    {
        field: 'id',
        headerName: 'About What?',
        width: 150,
        editable: true,
    },
    {
        field: 'announcement',
        headerName: 'Announcement',
        width: 750,
        editable: true,
    },


];

const rows = [
    { id: 'Payment', announcement: 'Last day for dormitory fee payment!'},
    { id: 'Dorm System', announcement: 'Electricity will not be between 12:00-13:00!'},
];
function ViewAnnouncement() {
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
export default ViewAnnouncement;