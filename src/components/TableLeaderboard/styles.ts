import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        paper: {
            width: "100%",
            float: "left",
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.secondary.main,
        },
        table: {
            minWidth: 750,
        },
        searchBar: {
            margin: 10,
        },
    })
);
export default useStyles;
