import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        cell: {
            backgroundColor: "#0292e5",
            color: theme.palette.secondary.contrastText,
        },
        visuallyHidden: {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: 1,
            margin: -1,
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            top: 20,
            width: 1,
        },
    })
);
export default useStyles;
