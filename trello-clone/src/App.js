import React, { useState } from "react";
import Nav from "./Components/Main/Nav/Nav";
import Navbar from "./Components/Main/Navbar/Navbar";
import Main from "./Components/Main/Main/Main";
import { connect } from "react-redux";

const App = () => {
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
    const [lists, setLists] = useState([
        {
            id: 0,
            title: "First List",
            cards: cards,
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);

    const handleChangeImport = (currentTargetValue) => {
        setInputValue(currentTargetValue);
    };

    const handleAddCard = (value) => {
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

    const [baz, setBaz] = useState(false);

    const handleAddList = (value) => {
        const newList = {
            id: lists.length,
            title: value,
            cards: [],
        };
        const allLists = lists;
        allLists.push(newList);
        setLists(allLists);
        console.log(lists);
        setInpValueList("");
    };
    const [inpValueList, setInpValueList] = useState("");
    const handleChange1 = (e) => {
        setInpValueList(e);
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
                baz={baz}
                setBaz={setBaz}
                onAddList={handleAddList}
                inpValueList={inpValueList}
                setInpValueList={handleChange1}
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
