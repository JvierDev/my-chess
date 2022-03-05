import {
    Card,
    CardContent,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import moment from "moment";
import { useSelector } from "react-redux";
import { FetchProfileState, Profile } from "../../stores/ducks/profile/types";
import StatsCard from "../StatsCard";
import useStyles from "./styles";
import { useEffect, useState } from "react";
import profilePic from "../../assets/profile.png";

const ProfileSection = () => {
    const classes = useStyles();
    const profileData = useSelector<FetchProfileState, Profile>(
        (state) => state.profile.profile
    );

    const [isData, setIsData] = useState<boolean>(false);

    useEffect(() => {
        const { avatar, stats, ...rest } = profileData;
        setIsData(
            Object.values(rest).every((item) => {
                return item !== undefined;
            })
        );
    }, [profileData]);

    return (
        <div>
            {isData && (
                <Card className={classes.card}>
                    <CardContent>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Grid
                                item
                                xs={12}
                                md={3}
                                className={classes.gridImg}
                            >
                                <img
                                    src={
                                        profileData.avatar
                                            ? profileData.avatar
                                            : profilePic
                                    }
                                    alt="User avatar"
                                    className={classes.profilePic}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <List dense={true}>
                                    <ListItem>
                                        <ListItemText
                                            className={classes.listItemText}
                                            primary={`Username: ${profileData.username}`}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            className={classes.listItemText}
                                            primary={`Name: ${profileData.name}`}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            className={classes.listItemText}
                                            primary={`Followers: ${profileData.followers}`}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            className={classes.listItemText}
                                            primary={`Joined: ${
                                                profileData.joined
                                                    ? moment(
                                                          profileData.joined *
                                                              1000
                                                      ).format("LL")
                                                    : "Not available"
                                            }`}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            className={classes.listItemText}
                                            primary={`Last access: ${
                                                profileData.last_online
                                                    ? moment(
                                                          profileData.last_online *
                                                              1000
                                                      ).format("LL")
                                                    : "Not available"
                                            }`}
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography
                                    variant="h5"
                                    className={classes.statsCategories}
                                >
                                    <TimerIcon
                                        className={classes.iconCategories}
                                    />{" "}
                                    Rapid
                                </Typography>
                                <Divider />
                                {profileData.stats?.chess_rapid && (
                                    <Grid
                                        container
                                        spacing={3}
                                        className={classes.gridStats}
                                    >
                                        <Grid item md={4}>
                                            <StatsCard
                                                title="Wins"
                                                detail={
                                                    profileData.stats
                                                        ?.chess_rapid.record
                                                        .win as number
                                                }
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <StatsCard
                                                title="Draws"
                                                detail={
                                                    profileData.stats
                                                        ?.chess_rapid.record
                                                        .draw as number
                                                }
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <StatsCard
                                                title="Losses"
                                                detail={
                                                    profileData.stats
                                                        ?.chess_rapid.record
                                                        .loss as number
                                                }
                                            />
                                        </Grid>
                                    </Grid>
                                )}
                                {!profileData.stats?.chess_rapid && (
                                    <StatsCard
                                        title=""
                                        detail="Has not played"
                                    />
                                )}
                                <Typography
                                    variant="h5"
                                    className={classes.statsCategories}
                                >
                                    <FlashOnIcon
                                        className={classes.iconCategories}
                                    />{" "}
                                    Blitz
                                </Typography>
                                <Divider />
                                {profileData.stats?.chess_blitz && (
                                    <Grid
                                        container
                                        spacing={3}
                                        className={classes.gridStats}
                                    >
                                        <Grid item md={4}>
                                            <StatsCard
                                                title="Wins"
                                                detail={
                                                    profileData.stats
                                                        ?.chess_blitz.record
                                                        .win as number
                                                }
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <StatsCard
                                                title="Draws"
                                                detail={
                                                    profileData.stats
                                                        ?.chess_blitz.record
                                                        .draw as number
                                                }
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <StatsCard
                                                title="Losses"
                                                detail={
                                                    profileData.stats
                                                        ?.chess_blitz.record
                                                        .loss as number
                                                }
                                            />
                                        </Grid>
                                    </Grid>
                                )}
                                {!profileData.stats?.chess_blitz && (
                                    <StatsCard
                                        title=""
                                        detail="Has not played"
                                    />
                                )}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default ProfileSection;
