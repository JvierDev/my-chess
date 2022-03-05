import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from "@material-ui/core";
import {
    LeaderboardData,
    EnhancedLeaderboardTableProps,
} from "../../interfaces/interface";
import useStyles from "./styles";

interface HeadCell {
    disablePadding: boolean;
    id: keyof LeaderboardData;
    label: string;
}

const headCells: HeadCell[] = [
    { id: "rank", disablePadding: true, label: "Rank" },
    {
        id: "username",
        disablePadding: false,
        label: "Username",
    },
    { id: "score", disablePadding: false, label: "Score" },
    {
        id: "win_count",
        disablePadding: false,
        label: "Wins",
    },
    {
        id: "draw_count",
        disablePadding: false,
        label: "Draws",
    },
    {
        id: "loss_count",
        disablePadding: false,
        label: "Loss",
    },
];

const TableEquipmentHead = (props: EnhancedLeaderboardTableProps) => {
    const classes = useStyles();
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
        (property: keyof LeaderboardData) =>
        (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        className={classes.cell}
                        style={{ width: `${100 / headCells.length}%` }}
                        key={headCell.id}
                        align="center"
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableEquipmentHead;
