import {
    AppBar,
    IconButton,
    Menu,
    Toolbar,
    Typography,
    withTheme,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import ChangeTheme from "../ChangeTheme";
// import logo from "../../assets/alaya.png";

const MenuAppBar = () => {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = "app-primary-menu-mobile";

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <ChangeTheme isMenu={true} />
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.gdaaAppBar}>
                <Toolbar className={classes.toolbar}>
                    {/* <img src={logo} alt={"Alaya"} className={classes.logo} /> */}
                    <Typography className={classes.title} variant="h6" noWrap>
                        My Chess
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <ChangeTheme />
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
};

export default withTheme(MenuAppBar);
