import { Button, Box, TextField, CircularProgress } from "@mui/material"

export const SearchBar = ({ onSearchChange, onSubmit, isLoading, query }) => {
    const onClickButton = () => {
        if(isLoading) return;

        onSubmit()
    }
    return (
<<<<<<< Updated upstream
        <Box sx={{ gridColumn: '2/3', gridRow: '2/2', display: 'flex', alignItems: 'center', marginBottom: '80px' }}>
            <TextField fullWidth variant="outlined" placeholder="What type of problem do you have?" onChange={(e) => onSearchChange(e)} />
            <Button fullWidth color="secondary" variant="contained" 
                sx={{ height: "55px", marginLeft: '4px', fontSize: '16px', width: 'auto', whiteSpace: 'nowrap', textTransform: 'none', padding: '7.5px 36px' }}
            >Find me a solution</Button>
=======
        <Box sx={{ gridColumn: '2/3', gridRow: '2/2', display: 'flex', alignItems: 'center' }}>
            <TextField disabled={isLoading} value={query} fullWidth variant="outlined" placeholder="What type of problem do you have?" onChange={(e) => onSearchChange(e)} />
            <Button fullWidth color="secondary" variant="contained" sx={{ height: "55px", marginLeft: '4px', maxWidth: '260px'  }}  onClick={onClickButton} >
                {!isLoading && ('Find me a solution')}
                {isLoading && <CircularProgress />}
            </Button>
>>>>>>> Stashed changes
        </Box>
    )
}