import AppBarForAdmin from "./AppBarForAdmin";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function DinnerMenuForAdmin() {
    return (
        <div>
            <AppBarForAdmin />
            <Box sx={{ '& button': { m: 1, width: '60ch' } }}>
                <Button variant="contained">Contained</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="contained">Contained</Button>

            </Box>
        </div>
    );
}
