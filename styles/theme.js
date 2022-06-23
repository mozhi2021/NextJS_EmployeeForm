import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: '#154c79',
    },
    secondary: {
      main: '#337ab7',
    },
    background: {
      default: "#f5f5f5",
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;