import React, { useState } from "react";
import { Collapse, Paper, Typography } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputCard from "./../InputCard/InputCard";

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        background: "#EBECF0",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: fade("#000", 0.25),
        },
    },
}));

const CardContainer = ({
    list,
    onAddList,
    open,
    setOpen,
    inpValue,
    setInpValue,
}) => {
    const styles = useStyle();
    return (
        <>
            <div className={styles.root}>
                <Collapse in={open}>
                    <InputCard
                        list={list}
                        setOpen={setOpen}
                        onAddList={onAddList}
                        inpValue={inpValue}
                        setInpValue={setInpValue}
                    />
                </Collapse>
                <Collapse in={!open}>
                    <Paper
                        className={styles.addCard}
                        onClick={() => setOpen(!open)}
                    >
                        <Typography> + Add a New Card</Typography>
                    </Paper>
                </Collapse>
            </div>
        </>
    );
};

export default CardContainer;
