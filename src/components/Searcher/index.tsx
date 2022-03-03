import { Button, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { getPlayer, getStats } from "../../api/profile.api";
import { useDispatch } from "react-redux";
import { setProfile } from "../../stores/ducks/profile/profile";
import { UserInfoData, UserStatsData } from "../../interfaces/interface";

const Searcher = () => {
    const [username, setUsername] = useState<string>("");
    const [userInfo, setUserInfo] = useState<UserInfoData | null>(null);
    const [userStats, setUserStats] = useState<UserStatsData[]>([]);

    const handleUsernameField = (value: string) => {
        setUsername(value);
    };

    const getData = () => {
        getPlayer(username)
            .then((response: any) => {
                setUserInfo(response);
            })
            .catch((err) => {
                console.error(err);
            });
        getStats(username)
            .then((response: any) => {
                setUserStats([
                    {
                        chess_blitz: response.chess_blitz,
                        chess_rapid: response.chess_rapid,
                    },
                ]);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const dispatch = useDispatch();

    dispatch(
        setProfile({
            username: userInfo?.username,
            name: userInfo?.name,
            avatar: userInfo?.avatar,
            joined: userInfo?.joined,
            last_online: userInfo?.last_online,
            followers: userInfo?.followers,
            url: userInfo?.url,
            stats: userStats[0] as UserStatsData,
        })
    );

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
                    id="outlined-full-width"
                    label="Username"
                    style={{ margin: 8 }}
                    placeholder="Username"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => handleUsernameField(e.target.value)}
                    value={username}
                />
            </Grid>
            <Grid item xs={3}>
                <Button
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
