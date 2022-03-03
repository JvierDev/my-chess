import { Switch, Route, Redirect } from "react-router-dom";
import LeaderboardView from "../views/Leaderboard";
import ProfileView from "../views/Profile";

const Routing = () => {
    return (
        <>
            <Switch>
                <Route path="/profile" exact sensitive={false}>
                    <ProfileView />
                </Route>
                <Route path="/leaderboard" exact sensitive={false}>
                    <LeaderboardView />
                </Route>
                <Route path="*">
                    <Redirect to="/profile" />
                </Route>
                <Route path="/">
                    <Redirect to="/profile" />
                </Route>
            </Switch>
        </>
    );
};

export default Routing;
