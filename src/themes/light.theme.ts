import { createTheme, ThemeOptions } from "@material-ui/core";

const LightTheme: ThemeOptions = {
    palette: {
        type: "light",
        secondary: {
            main: "#FFFFFF",
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: "#F0F0F0",
            },
        },
        MuiToolbar: {
            root: {},
        },
        MuiContainer: {
            root: {
                backgroundColor: "#fafafa",
            },
        },
    },
};

const getLightTheme = () => {
    return createTheme(LightTheme);
};

export default getLightTheme;
