import { Paper, Card, CardHeader, CardContent } from "@material-ui/core";
import TableLeaderboard from "../../components/TableLeaderboard";

const LeaderboardView = () => {
    return (
        <Paper>
            <Card>
                <CardHeader title="Daily Leaderboard" />
                <CardContent>
                    <TableLeaderboard numberRows={10} />
                </CardContent>
            </Card>
        </Paper>
    );
};

export default LeaderboardView;
