import AppBarForAdmin from "./AppBarForAdmin";
import Box from '@mui/material/Box';

function MakeAnnouncementPage() {
    return (
        <div>
            <AppBarForAdmin />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
            </Box>
        </div>
    );
}
export default MakeAnnouncementPage;