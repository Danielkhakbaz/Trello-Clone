import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "#4bbf6b",
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.navbar}>
                <Toolbar>
                    <Typography variant="body1">Trello Clone</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
