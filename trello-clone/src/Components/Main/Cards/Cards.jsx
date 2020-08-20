import React, { useState } from "react";
import { Card, CardContent, Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Cards = ({ cards }) => {
    const [tastTitle, setTastTitle] = useState(cards.title);
    const useStyles = makeStyles((theme) => ({
        input: {
            fontSize: "15px",
            borderRadius: "3px",
            "&:hover": {
                backgroundColor: "hsla(0,0%,100%,.32)",
            },
        },
    }));
    const styles = useStyles();
    const controlEnterKey = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    };
    const settitleListValue = (e) => {
        setTastTitle(e);
    };
    return (
        <>
            <Card>
                <CardContent>
                    <InputBase
                        className={styles.input}
                        value={tastTitle}
                        placeholder="Type Task's Title here"
                        fullWidth
                        onChange={(e) =>
                            settitleListValue(e.currentTarget.value)
                        }
                        onKeyDown={controlEnterKey}
                    />
                </CardContent>
            </Card>
        </>
    );
};

export default Cards;
