import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FetchAppThemeState } from "../stores/ducks/appTheme/types";
import getDarkTheme from "../themes/dark.theme";
import getLightTheme from "../themes/light.theme";

const APP_THEMES = {
    light: "light",
    dark: "dark",
};

const AppThemeProvider = (props: any) => {
    const { children } = props;
    const appTheme = useSelector<FetchAppThemeState, string>(
        (state) => state.appTheme.theme
    );
    const [theme, setTheme] = useState(getLightTheme());
    useEffect(() => {
        if (appTheme === APP_THEMES.light) {
            setTheme(getLightTheme());
        }
        if (appTheme === APP_THEMES.dark) {
            setTheme(getDarkTheme());
        }
    }, [appTheme]);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppThemeProvider, APP_THEMES };
