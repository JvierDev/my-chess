import { makeStyles } from "@material-ui/core";
import { APP_THEMES } from "../../providers/theme.provider";

const height = 70;

const useStyles = makeStyles((theme) => ({
    gdaaAppBar: {
        backgroundColor:
            theme.palette.type === APP_THEMES.dark ? "#333333" : "#000000",
        height: height,
    },
    toolbar: {
        paddingLeft: 5,
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        paddingLeft: 15,
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

export default useStyles;
