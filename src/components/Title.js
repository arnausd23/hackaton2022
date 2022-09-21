import { Box } from "@mui/material";
import { orangeColor } from "../Theme";

export const Title = ({isProductPageTitle}) => (
    <Box sx={{ gridColumn: '2/3', gridRow: '1/2' }}>
        <h1 style={{ color: isProductPageTitle ? '#F7FAFB' : '#002E47', margin: '0 0 42px', fontSize: '32px', lineHeight: 1.5, maxWidth: '650px' }}>
            <span style={{ color: orangeColor }}>/&nbsp;</span>
            Capterra helps you find the right software for your business
        </h1>
    </Box>
)