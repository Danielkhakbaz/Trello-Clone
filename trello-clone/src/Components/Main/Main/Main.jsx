import React from "react";
import Lists from "../Lists/Lists";

const Main = ({
    lists,
    cards,
    onHandleAddCard,
    open,
    setOpen,
    onDeleteList,
    inpValue,
    setInpValue,
}) => {
    return (
        <>
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
        </>
    );
};

export default Main;
