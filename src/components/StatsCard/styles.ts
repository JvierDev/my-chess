import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            width: "100%",
            height: 100,
            marginRight: 10,
            marginBottom: 10,
            textAlign: "center",
        },
        title: {
            color: "#0292e5",
        },
    })
);
export default useStyles;
