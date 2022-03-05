import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: 15,
        backgroundColor: theme.palette.secondary.main,
    },
    listItemText: {
        color: theme.palette.secondary.contrastText,
    },
    profilePic: {
        height: 200,
    },
    gridImg: {
        textAlign: "center",
    },
    gridStats: {
        marginTop: 4,
    },
    statsCategories: {
        color: theme.palette.secondary.contrastText,
    },
    iconCategories: {
        color: "#0292e5",
    },
}));
export default useStyles;
