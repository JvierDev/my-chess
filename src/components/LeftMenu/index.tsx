import clsx from "clsx";
import StylesBuilder from "./styles";
import "./index.scss";
import { NavLink } from "react-router-dom";
import {
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    withTheme,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

interface Props {
    open: boolean;
    width: number;
    handleDrawerToggle: (e: any) => void;
}

const LeftMenu = (props: Props) => {
    const classes = StylesBuilder(props.width);

    const isActiveTab = (match: any) => {
        if (!match) {
            return false;
        }
        if (match.isExact) {
            return true;
        }
        const eventID = parseInt(match.params.eventID);
        return !isNaN(eventID) && eventID % 2 === 1;
    };
    return (
        <div className="app-left-menu">
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open,
                    }),
                }}
                open={props.open}
            >
                <div className={classes.toolbar}>
                    <IconButton
                        onClick={(e: any) => props.handleDrawerToggle(e)}
                    >
                        {!props.open ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <List>
                    <ListItem button key="profile" className={classes.listItem}>
                        <NavLink
                            exact
                            activeClassName="active-nav-link"
                            to={"/profile"}
                            isActive={isActiveTab}
                            className={classes.itemShift}
                        >
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faHouse} size="lg" />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </NavLink>
                    </ListItem>
                    <ListItem
                        button
                        key="leaderboard"
                        className={classes.listItem}
                    >
                        <NavLink
                            exact
                            activeClassName="active-nav-link"
                            to={"/leaderboard"}
                            isActive={isActiveTab}
                            className={classes.itemShift}
                        >
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faTrophy} size="lg" />
                            </ListItemIcon>
                            <ListItemText primary="Leaderboard" />
                        </NavLink>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default withTheme(LeftMenu);
