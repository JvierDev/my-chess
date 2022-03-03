import {
    SET_PROFILE,
    Profile,
    ProfileActionTypes,
    ProfileState,
} from "./types";

const initialState: ProfileState = {
    profile: {
        username: undefined,
        name: undefined,
        avatar: undefined,
        url: undefined,
        followers: undefined,
        joined: undefined,
        last_online: undefined,
        stats: undefined,
    },
};

const getProfileObject = (payload: Profile): ProfileState => {
    return {
        profile: {
            ...payload,
        },
    };
};

export function profileReducer(
    state = initialState,
    action: ProfileActionTypes
): ProfileState {
    switch (action.type) {
        case SET_PROFILE:
            return getProfileObject(action.payload);
        default:
            return state;
    }
}

export function setProfile(profile: Profile): ProfileActionTypes {
    return {
        type: SET_PROFILE,
        payload: profile,
    };
}
