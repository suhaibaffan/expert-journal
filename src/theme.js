import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#537178',
        },
        secondary: {
            main: '#5285EC',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#F4F4F6',
        },
    },
    typography: {
        fontFamily: "Montserrat"
    }
});

export default theme;
