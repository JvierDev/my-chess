import { Card, Typography } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
    title: string;
    detail: string | number;
}

const StatsCard = (props: Props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title} gutterBottom>
                {props.title}
            </Typography>
            <Typography variant="body2" component="p">
                {props.detail}
            </Typography>
        </Card>
    );
};

export default StatsCard;
