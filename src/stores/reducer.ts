import { combineReducers } from "redux";
import { appThemeReducer } from "./ducks/appTheme/appTheme";
import { profileReducer } from "./ducks/profile/profile";

const rootReducer = combineReducers({
    appTheme: appThemeReducer,
    profile: profileReducer
});

export default rootReducer;
