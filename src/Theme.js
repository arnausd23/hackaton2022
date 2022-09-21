import { createTheme } from '@mui/material/styles';

export const orangeColor = '#FF6200'
export const yellowColor = '#FF9D28'

export const theme = createTheme({
    palette: {
        secondary: {
            light: yellowColor,
            main: yellowColor,
            dark: yellowColor,
            contrastText: '#002E47'
        },
    },
});
