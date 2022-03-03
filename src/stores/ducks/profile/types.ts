export interface Profile {
    username: string | undefined;
    name: string | undefined;
    avatar: string | undefined;
    joined: number | undefined;
    last_online: number | undefined;
    followers: number | undefined;
    url: string | undefined;
    stats: UserStats | undefined;
}

export interface StatsRecord {
    draw: number;
    loss: number;
    win: number;
}

export interface UserStats {
    chess_blitz: {
        record: StatsRecord;
    };
    chess_rapid: {
        record: StatsRecord;
    };
}

export interface ProfileState {
    profile: Profile;
}

export interface FetchProfileState {
    profile: ProfileState;
}

export const SET_PROFILE = "SET_PROFILE";

interface GetProfileAction {
    type: typeof SET_PROFILE;
    payload: Profile;
}

export type ProfileActionTypes = GetProfileAction;
