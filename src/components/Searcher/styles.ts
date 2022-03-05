import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textField: {
        margin: 0,
        "& label.Mui-focused": {
            color: "#0292e5",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "green",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#0292e5",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#0292e5",
            },
        },
    },
    searchButton: {
        color: theme.palette.secondary.contrastText,
        "&.MuiButton-outlinedPrimary": {
            borderColor: "#0292e5",
        },
        "&:hover": {
            border: `1px solid ${theme.palette.secondary.contrastText}`,
        },
        height: 50,
    },
}));
export default useStyles;
