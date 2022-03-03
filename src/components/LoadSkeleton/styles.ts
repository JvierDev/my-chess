import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.secondary.main,
            padding: 10,
            boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            borderRadius: 4,
        },
    })
);
export default useStyles;
