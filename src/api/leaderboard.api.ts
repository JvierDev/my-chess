import client from "./client.api";

export const getLeaderboards = () => {
    return client.get("/leaderboards");
};
