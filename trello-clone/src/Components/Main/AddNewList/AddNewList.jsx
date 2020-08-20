import React from "react";
import { Collapse, Paper, Typography } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputList from "../InputList/InputList";

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
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

const AddNewList = ({
    list,
    baz,
    setBaz,
    onAddList,
    inpValue,
    setInpValue,
}) => {
    const styles = useStyle();
    return (
        <>
            <div className={styles.root}>
                <Collapse in={baz}>
                    <InputList
                        list={list}
                        setOpen={setBaz}
                        onAddList={onAddList}
                        inpValue={inpValue}
                        setInpValue={setInpValue}
                    />
                </Collapse>
                <Collapse in={!baz}>
                    <Paper
                        className={styles.addCard}
                        onClick={() => setBaz(!baz)}
                    >
                        <Typography> + Add a New List</Typography>
                    </Paper>
                </Collapse>
            </div>
        </>
    );
};

export default AddNewList;
