import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { LeaderboardData, Order } from "../../interfaces/interface";
import TableHeadLeaderboard from "../TableHeadLeaderboard";
import useStyles from "./styles";
import { getLeaderboards } from "../../api/leaderboard.api";
import LoadSkeleton from "../LoadSkeleton";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string | Date },
    b: { [key in Key]: number | string | Date }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface Props {
    numberRows: number;
}

const TableLeaderboard = (props: Props) => {
    const classes = useStyles();
    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<keyof LeaderboardData>("rank");
    const [selected] = useState<string[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(props.numberRows);
    const [leaderboard, setLeaderboard] = useState<LeaderboardData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof LeaderboardData
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getData = async () => {
        setLoading(true);
        getLeaderboards()
            .then((response: any) => {
                setLeaderboard(response.daily);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {!loading && (
                    <>
                        <TableContainer>
                            <Table
                                className={classes.table}
                                aria-labelledby="Leaderboard"
                                aria-label="Leaderboard table"
                            >
                                <TableHeadLeaderboard
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onRequestSort={handleRequestSort}
                                    rowCount={leaderboard.length}
                                />
                                <TableBody>
                                    {stableSort(
                                        leaderboard,
                                        getComparator(order, orderBy)
                                    )
                                        .slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        .map((row) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key={row.rank}
                                                >
                                                    <TableCell align="center">
                                                        {row.rank}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.username}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.score}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.win_count}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.draw_count}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.loss_count}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={leaderboard.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </>
                )}
                {loading && <LoadSkeleton length={15} />}
            </Paper>
        </div>
    );
};

export default TableLeaderboard;
