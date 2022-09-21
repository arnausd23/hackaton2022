import { createTheme } from '@mui/material/styles';

export const orangeColor = '#ff9d28'
export const capterraBlueColor = '#044D80'

export const theme = createTheme({
    palette: {
        secondary: {
            light: orangeColor,
            main: orangeColor,
            dark: orangeColor,
            contrastText: '#fff'
        },
    },
});
