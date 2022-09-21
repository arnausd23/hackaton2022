import { createTheme } from '@mui/material/styles';

export const orangeColor = '#FF6200'
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
