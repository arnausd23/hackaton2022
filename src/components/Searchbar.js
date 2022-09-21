import { Button, Grid, TextField } from "@mui/material"

export const SearchBar = ({onSearchChange}) => {

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
                <TextField fullWidth variant="outlined" placeholder="What type of problem do you have?" onChange={(e) => onSearchChange(e)}/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Button fullWidth color="secondary" variant="contained" sx={{ height: "100%" }}>Find me a solution</Button>
            </Grid>
        </Grid>
    )
}