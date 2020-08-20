import React, { useState } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirmed: {
        background: "#4bbf6b",
        color: "#fff",
        "&:hover": {
            background: fade("#4bbf6b", 0.75),
        },
    },
}));

const InputCard = ({ list, setOpen, onAddList, inpValue, setInpValue }) => {
    const styles = useStyle();
    return (
        <>
            <div>
                <Paper className={styles.card}>
                    <InputBase
                        onBlur={() => setOpen(false)}
                        inputProps={{ className: styles.input }}
                        multiline
                        fullWidth
                        value={inpValue}
                        placeholder="Enter"
                        onChange={(e) => setInpValue(e.currentTarget.value)}
                    />
                </Paper>
            </div>
            <div className={styles.card}>
                <Button
                    className={styles.btnConfirmed}
                    onClick={() => onAddList(inpValue, list.id)}
                >
                    Add Card
                </Button>
                <IconButton>
                    <ClearIcon onClick={() => setOpen(false)} />
                </IconButton>
            </div>
        </>
    );
};

export default InputCard;
