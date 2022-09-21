import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CircularProgress, InputAdornment, TextField } from "@mui/material";

export const SearchBar = ({ onTextFieldChange, onSubmit, isLoading, value }) => {
    const onClickButton = () => {
        if (isLoading) return;

        onSubmit()
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '80px', maxWidth: '800px' }}>
            <div className="TextField-border-radius">
                <TextField variant="outlined" placeholder="What type of problem do you have?" value={value} onChange={e => onTextFieldChange(e)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <Button fullWidth color="secondary" variant="contained"
                className='search-button'
                sx={{
                    height: '100%',
                    fontSize: '16px',
                    width: 'auto',
                    whiteSpace: 'nowrap',
                    padding: '7.5px 36px',
                    height: '56px'
                }}
                onClick={onClickButton}
            >
                {!isLoading && ('Find a solution')}
                {isLoading && <CircularProgress />}
            </Button>
        </Box>
    )
}