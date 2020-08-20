import React from "react";
import Lists from "../Lists/Lists";

const Main = ({ lists }) => {
    return (
        <>
            {lists.map((list) => (
                <Lists list={list} cards={list.cards} />
            ))}
        </>
    );
};

export default Main;
