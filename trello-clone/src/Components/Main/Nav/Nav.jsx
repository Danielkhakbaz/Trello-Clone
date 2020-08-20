import React from "react";
import { Box, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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

    const controlEnterKey = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    };

    return (
        <>
            <Box className={styles.nav} color="white" p={2} pl={3}>
                <form autoComplete="off" noValidate>
                    <InputBase
                        className={styles.input}
                        value={inputValue}
                        placeholder="Task Title"
                        onChange={(e) => onChangeInput(e.currentTarget.value)}
                        onKeyDown={controlEnterKey}
                    />
                </form>
            </Box>
        </>
    );
};

Nav.propTypes = {
    inputValue: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
};

export default Nav;
