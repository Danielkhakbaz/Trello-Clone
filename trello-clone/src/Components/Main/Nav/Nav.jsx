import React from "react";
import { Box, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: "#4bbf6b",
    },
    input: {
        fontSize: "18px",
        fontWeight: "700",
        color: "white",
        borderRadius: "3px",
        lineHeight: "32px",
        padding: "0 6px",
        "&:hover": {
            backgroundColor: "hsla(0,0%,100%,.32)",
        },
    },
}));

const Nav = () => {
    const styles = useStyles();
    return (
        <>
            <Box className={styles.nav} color="white" p={2} pl={3}>
                <form noValidate autoComplete="off">
                    <InputBase
                        className={styles.input}
                        placeholder="Task Title"
                    />
                </form>
            </Box>
        </>
    );
};

export default Nav;
