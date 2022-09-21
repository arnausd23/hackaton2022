import { Box } from "@mui/material";
import { capterraBlueColor, orangeColor } from "../Theme";

export const Title = () => (
    <Box sx={{ gridColumn: '2/3', gridRow: '1/2' }}>
        <h1 style={{ color: capterraBlueColor }}><span style={{ color: orangeColor }}>/&nbsp;</span>Capterra helps you find the right software for your business</h1>
    </Box>
)