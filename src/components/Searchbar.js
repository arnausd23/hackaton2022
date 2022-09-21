import { Button, Box, TextField, CircularProgress } from "@mui/material"

export const SearchBar = ({ onSearchChange, onSubmit, isLoading, value }) => {
    const onClickButton = () => {
        if(isLoading) return;

        onSubmit()
    }
    return (
        <Box sx={{ gridColumn: '2/3', gridRow: '2/2', display: 'flex', alignItems: 'center', marginBottom: '80px' }}>
            <TextField fullWidth variant="outlined" placeholder="What type of problem do you have?" value={value} />
            <Button fullWidth color="secondary" variant="contained" 
                sx={{ height: "55px", marginLeft: '4px', fontSize: '16px', width: 'auto', whiteSpace: 'nowrap', textTransform: 'none', padding: '7.5px 36px' }}onClick={onClickButton} >
                {!isLoading && ('Find me a solution')}
                {isLoading && <CircularProgress />}
            </Button>
        </Box>
    )
}