import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

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
                        edge="start"
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="body1">Trello Clone</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
