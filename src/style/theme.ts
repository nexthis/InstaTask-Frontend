import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        type: "light",
    },

}));



export default theme;