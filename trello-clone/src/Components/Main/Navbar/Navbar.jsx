import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "#40A35B",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Navbar = () => {
    const styles = useStyles();

    return (
        <>
            <AppBar className={styles.navbar} position="static">
                <Toolbar variant="dense">
                    <IconButton
                        className={styles.menuButton}
                        color="inherit"
                        edge="start"
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="body1">Trello Clone</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
