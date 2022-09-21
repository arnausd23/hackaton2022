import { Box } from "@mui/material";
import { orangeColor } from "../Theme";

export const Title = () => (
    <Box sx={{ gridColumn: '2/3', gridRow: '1/2' }}>
        <h1 style={{ color: '#F7FAFB', margin: '0 0 42px', fontSize: '32px', lineHeight: '33.41px', maxWidth: '650px' }}>
            <span style={{ color: orangeColor }}>/&nbsp;</span>
            Capterra helps you find the right software for your business
        </h1>
    </Box>
)