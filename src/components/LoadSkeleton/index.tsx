import { Skeleton } from "@material-ui/lab";
import useStyles from "./styles";

interface Props {
    length: number;
}
const LoadSkeleton = (props: Props) => {
    const classes = useStyles();
    const referenceCmp = new Array(props.length);
    for (let i = 0; i < props.length; i++) {
        referenceCmp.push(i);
    }

    return (
        <div className={classes.root}>
            {referenceCmp.map((x, index) => {
                return <Skeleton key={index} width="100%" height={40} />;
            })}
        </div>
    );
};

export default LoadSkeleton;
