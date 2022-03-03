import { makeStyles } from "@material-ui/core";

export default function StylesBuilder(drawerWidth: number) {
    const top = 70;
    const width = 65;
    const styles = makeStyles((theme) => ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
        },
        drawerOpen: {
            top: top,
            width: drawerWidth,
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            top: top,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: "hidden",
            width: width,
            [theme.breakpoints.up("sm")]: {
                width: width,
            },
        },
        listItem: {
            paddingLeft: 20,
        },
        itemShift: {
            left: 0,
            [theme.breakpoints.up("sm")]: {
                marginLeft: 0,
            },
        },
        toolbar: {
            minHeight: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
        },
    }));

    return styles();
}
