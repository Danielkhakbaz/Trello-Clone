import React from "react";
import { Box, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    nav: {
        backgroundColor: "#4bbf6b",
    },
    input: {
        fontSize: "18px",
        fontWeight: "700",
        color: "white",
        lineHeight: "32px",
        borderRadius: "3px",
        padding: "0 6px",
        "&:hover": {
            backgroundColor: "hsla(0,0%,100%,.32)",
        },
    },
}));

const Nav = ({ inputValue, onChangeInput }) => {
    const styles = useStyles();

    return (
        <>
            <Box className={styles.nav} color="white" p={2} pl={3}>
                <form autoComplete="off" noValidate>
                    <InputBase
                        className={styles.input}
                        value={inputValue}
                        placeholder="Task Title"
                        onChange={(e) => onChangeInput(e.currentTarget.value)}
                    />
                </form>
            </Box>
        </>
    );
};

export default Nav;
