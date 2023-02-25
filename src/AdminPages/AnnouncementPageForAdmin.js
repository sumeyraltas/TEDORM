import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBarForAdmin from './AppBarForAdmin';
import Button from '@mui/material/Button';

export default function AnnouncementPageForAdmin() {
  return (
    <div>
      <AppBarForAdmin />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 3, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Announcement Header"
            id="fullWidth"
            defaultValue="Write your header." />
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Announcement Body"
          multiline
          rows={4}
          defaultValue="Write your requests."
        />
      </Box>

      <Button variant="outlined">Submit</Button>
    </div>
  );
}
