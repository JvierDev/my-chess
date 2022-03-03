import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    main: {
        paddingLeft: "75px!important" as any,
        height: "calc(100vh - 70px)",
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        overflow: "auto",
    },
}));

export default useStyles;
