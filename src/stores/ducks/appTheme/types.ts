export interface AppTheme {
    theme: string;
}

export interface AppThemeState {
    theme: string;
}

export interface FetchAppThemeState {
    appTheme: AppThemeState;
}

export const SET_APPTHEME = "SET_APPTHEME";

interface GetAppThemeAction {
    type: typeof SET_APPTHEME;
    payload: AppTheme;
}

export type AppThemeActionTypes = GetAppThemeAction;
