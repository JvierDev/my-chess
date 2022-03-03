import client from "./client.api";

export const getPlayer = (user: string) => {
    return client.get(`/player/${user}`);
};

export const getStats = (user: string) => {
    return client.get(`/player/${user}/stats`);
};
