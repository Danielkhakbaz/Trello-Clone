import React, { useState } from "react";
import Cards from "../Cards/Cards";
import CardContainer from "./../CardContainer/CardContainer";
import { Paper, Box, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
    list: {
        width: "300px",
        backgroundColor: "#EBECF0",
        margin: theme.spacing(1),
        padding: theme.spacing(0.2),
    },
    box: {
        display: "flex",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    input: {
        fontSize: "15px",
        fontWeight: "700",
        lineHeight: "32px",
        borderRadius: "3px",
        "&:hover": {
            backgroundColor: "hsla(0,0%,100%,.32)",
        },
    },
    form: {
        flexGrow: "1",
    },
    moreIcon: {
        color: "black",
        flexGrow: "1",
        alignSelf: "center",
    },
    class: {
        margin: theme.spacing(1),
    },
    card: {
        margin: theme.spacing(1),
    },
}));

const Lists = ({ list, cards }) => {
    const [titleListValue, settitleListValue] = useState(list.title);
    const styles = useStyles();
    const controlEnterKey = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    };

    return (
        <>
            <Paper className={styles.list}>
                <Box className={styles.box} p={1}>
                    <form className={styles.form} autoComplete="off" noValidate>
                        <InputBase
                            className={styles.input}
                            value={titleListValue}
                            placeholder="Type Task's Title here"
                            fullWidth
                            onChange={(e) =>
                                settitleListValue(e.currentTarget.value)
                            }
                            onKeyDown={controlEnterKey}
                        />
                    </form>
                    <MoreHorizIcon className={styles.moreIcon} />
                </Box>
                {cards.map((card) => (
                    <div className={styles.class}>
                        <Cards cards={card} />
                    </div>
                ))}
                <CardContainer />
            </Paper>
        </>
    );
};

export default Lists;
