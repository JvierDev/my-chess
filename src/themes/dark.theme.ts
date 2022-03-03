import { createTheme, ThemeOptions } from "@material-ui/core";

const DarkTheme: ThemeOptions = {
    palette: {
        type: "dark",
        secondary: {
            main: "#444444",
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: "#333333",
            },
        },
        MuiToolbar: {
            root: {},
        },
        MuiContainer: {
            root: {
                backgroundColor: "black",
            },
        },
        MuiGrid: {
            root: {
                color: "#000000",
            },
        },
    },
};

const getDarkTheme = () => {
    return createTheme(DarkTheme);
};

export default getDarkTheme;
