import React from "react";
import Lists from "../Lists/Lists";
import { makeStyles } from "@material-ui/core/styles";
import AddNewList from "./../AddNewList/AddNewList";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
}));

const Main = ({
    lists,
    cards,
    onHandleAddCard,
    open,
    setOpen,
    onDeleteList,
    inpValue,
    setInpValue,
    baz,
    setBaz,
    onAddList,
    inpValueList,
    setInpValueList,
}) => {
    const styles = useStyles();
    return (
        <>
            <div className={styles.root}>
                {lists.map((list) => (
                    <Lists
                        list={list}
                        cards={cards}
                        onAddList={onHandleAddCard}
                        key={list.id}
                        open={open}
                        setOpen={setOpen}
                        onDeleteList={onDeleteList}
                        inpValue={inpValue}
                        setInpValue={setInpValue}
                    />
                ))}
                <AddNewList
                    list={lists}
                    baz={baz}
                    setBaz={setBaz}
                    onAddList={onAddList}
                    inpValue={inpValueList}
                    setInpValue={setInpValueList}
                />
            </div>
        </>
    );
};

export default Main;
