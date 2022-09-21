import { Button, Box, TextField } from "@mui/material"

export const SearchBar = ({ onSearchChange }) => {
    return (
        <Box sx={{ gridColumn: '2/3', gridRow: '2/2', display: 'flex', alignItems: 'center' }}>
            <TextField fullWidth variant="outlined" placeholder="What type of problem do you have?" onChange={(e) => onSearchChange(e)} />
            <Button fullWidth color="secondary" variant="contained" sx={{ height: "55px", marginLeft: '4px', maxWidth: '260px' }}>Find me a solution</Button>
        </Box>
    )
}