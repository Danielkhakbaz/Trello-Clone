import React, { useState } from "react";
import Nav from "./Components/Main/Nav/Nav";
import Navbar from "./Components/Main/Navbar/Navbar";
import Main from "./Components/Main/Main/Main";
import { connect } from "react-redux";

const App = () => {
    const [lists, setLists] = useState([
        {
            id: 0,
            title: "First List",
        },
    ]);
    const [cards, setCards] = useState([
        {
            id: 0,
            title: "First Card",
        },
        {
            id: 1,
            title: "Second Card",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);

    const handleChangeImport = (currentTargetValue) => {
        setInputValue(currentTargetValue);
    };

    const handleAddCard = (value, id) => {
        const newItem = {
            id: cards.length,
            title: value,
        };
        const allCards = [...cards, newItem];
        setCards(allCards);
        setValue("");
    };

    const handleDeleteList = (id) => {
        const allLists = lists.filter((list) => list.id !== id);
        setLists(allLists);
    };

    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e);
    };

    return (
        <>
            <Navbar />
            <Nav inputValue={inputValue} onChangeInput={handleChangeImport} />
            <Main
                lists={lists}
                cards={cards}
                onHandleAddCard={handleAddCard}
                open={open}
                setOpen={setOpen}
                onDeleteList={handleDeleteList}
                inpValue={value}
                setInpValue={handleChange}
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
