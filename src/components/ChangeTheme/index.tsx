import { IconButton, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { APP_THEMES } from "../../providers/theme.provider";
import { setAppTheme } from "../../stores/ducks/appTheme/appTheme";
import { FetchAppThemeState } from "../../stores/ducks/appTheme/types";

interface Props {
    isMenu?: boolean;
}

const ChangeTheme = (props: Props) => {
    const dispatch = useDispatch();
    const appTheme = useSelector<FetchAppThemeState, string>(
        (state) => state.appTheme.theme
    );

    const handleThemeChange = () => {
        dispatch(
            setAppTheme({
                theme:
                    appTheme === APP_THEMES.light
                        ? APP_THEMES.dark
                        : APP_THEMES.light,
            })
        );
    };

    const icon =
        appTheme === APP_THEMES.dark ? (
            <Brightness7Icon />
        ) : (
            <Brightness3Icon />
        );

    if (props.isMenu) {
        return (
            <MenuItem onClick={handleThemeChange}>
                <IconButton
                    color="inherit"
                    aria-label="mode"
                    aria-haspopup="true"
                >
                    {icon}
                </IconButton>
                <p>Change theme</p>
            </MenuItem>
        );
    }

    const getContent = () => {
        if (props.isMenu) {
            return (
                <MenuItem onClick={handleThemeChange}>
                    <IconButton edge="end" color="inherit" aria-label="mode">
                        {icon}
                    </IconButton>
                    <p>Change theme</p>
                </MenuItem>
            );
        }
        return (
            <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={handleThemeChange}
            >
                {icon}
            </IconButton>
        );
    };

    return getContent();
};

export default ChangeTheme;
