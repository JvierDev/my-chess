import useStyles from "../components/TableLeaderboard/styles";

export type Order = "asc" | "desc";

export interface EnhancedLeaderboardTableProps {
    classes: ReturnType<typeof useStyles>;
    numSelected: number;
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof LeaderboardData
    ) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export interface LeaderboardData {
    rank: number;
    score: number;
    name: string;
    username: string;
    win_count: number;
    draw_count: number;
    loss_count: number;
}

export interface UserInfoData {
    username: string;
    name: string;
    avatar: string;
    joined: number;
    last_online: number;
    followers: number;
    url: string;
}

export interface StatsRecord {
    draw: number;
    loss: number;
    win: number;
}

export interface UserStatsData {
    chess_blitz: {
        record: StatsRecord;
    };
    chess_rapid: {
        record: StatsRecord;
    };
}
