import {
    AppTheme,
    AppThemeActionTypes,
    AppThemeState,
    SET_APPTHEME,
} from "./types";

const currentTheme = localStorage.getItem("chessTheme") || "light";
const initialState: AppThemeState = {
    theme: currentTheme,
};

const getAppThemeObject = (payload: AppTheme): AppThemeState => {
    return {
        theme: payload.theme || "light",
    };
};

export function appThemeReducer(
    state = initialState,
    action: AppThemeActionTypes
): AppThemeState {
    switch (action.type) {
        case SET_APPTHEME:
            return getAppThemeObject(action.payload);
        default:
            return state;
    }
}

export function setAppTheme(appInit: AppTheme): AppThemeActionTypes {
    localStorage.setItem("chessTheme", appInit.theme);
    return {
        type: SET_APPTHEME,
        payload: appInit,
    };
}
