import { Button, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useCallback, useState } from "react";
import { getPlayer, getStats } from "../../api/profile.api";
import { useDispatch } from "react-redux";
import { setProfile } from "../../stores/ducks/profile/profile";
import { UserInfoData, UserStatsData } from "../../interfaces/interface";
import useStyles from "./styles";

const Searcher = () => {
    const classes = useStyles();
    const [username, setUsername] = useState<string>("");

    const handleUsernameField = (value: string) => {
        setUsername(value);
    };

    const dispatch = useDispatch();

    const getData = useCallback(async () => {
        const requests: UserInfoData | UserStatsData | any = [
            getPlayer(username),
            getStats(username),
        ];
        const [responsePlayer, responseStats] = await Promise.all(requests);

        dispatch(
            setProfile({
                username: (responsePlayer as UserInfoData).username,
                name: (responsePlayer as UserInfoData).name,
                avatar: (responsePlayer as UserInfoData).avatar,
                joined: (responsePlayer as UserInfoData).joined,
                last_online: (responsePlayer as UserInfoData).last_online,
                followers: (responsePlayer as UserInfoData).followers,
                url: (responsePlayer as UserInfoData).url,
                stats: {
                    chess_blitz: (responseStats as UserStatsData).chess_blitz,
                    chess_rapid: (responseStats as UserStatsData).chess_rapid,
                },
            })
        );
    }, [dispatch, username]);

    return (
        <Grid container spacing={3}>
            <Grid item xs={7} md={5}>
                <TextField
                    className={classes.textField}
                    label="Username"
                    placeholder="Username"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => handleUsernameField(e.target.value)}
                    value={username}
                />
            </Grid>
            <Grid item xs={5}>
                <Button
                    className={classes.searchButton}
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<SearchIcon />}
                    onClick={getData}
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    );
};

export default Searcher;
