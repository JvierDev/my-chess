import { useState } from "react";
import LeftMenu from "./components/LeftMenu";
import { HashRouter } from "react-router-dom";
import Routing from "./routing";
import useStyles from "./App.styles";
import { Container, CssBaseline } from "@material-ui/core";
import MenuAppBar from "./components/MenuAppBar";
import { AppThemeProvider } from "./providers/theme.provider";

const leftPanelWidthOpened = 250;

function App() {
    const classes = useStyles();
    const [leftPanelOpened, setLeftPanelOpened] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setLeftPanelOpened(!leftPanelOpened);
    };

    return (
        <div className="App">
            <AppThemeProvider>
                <CssBaseline />
                <MenuAppBar />
                <HashRouter>
                    <LeftMenu
                        open={leftPanelOpened}
                        handleDrawerToggle={handleDrawerToggle}
                        width={leftPanelWidthOpened}
                    />
                    <Container maxWidth={false} className={classes.main}>
                        <Routing />
                    </Container>
                </HashRouter>
            </AppThemeProvider>
        </div>
    );
}

export default App;
