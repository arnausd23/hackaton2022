import { CircularProgress, Dialog } from "@mui/material";

export const SimpleDialog = ({ isOpen }) => {
    return (
        <Dialog open={isOpen} sx={{ backgroundColor: '#F7FAFBE5', textAlign: 'center' }}>
            <CircularProgress sx={{margin: '0 auto'}}/>
            <p style={{
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.025em',
                color: '#000000'
            }}>You're just a few minutes away from finding the right solution for your business.</p>
        </Dialog >
    );
}