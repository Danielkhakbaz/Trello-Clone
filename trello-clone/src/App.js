import React, { useState } from "react";
import Nav from "./Components/Main/Nav/Nav";
import Navbar from "./Components/Main/Navbar/Navbar";
import Main from "./Components/Main/Main/Main";
import { connect } from "react-redux";

const App = ({ lists }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChangeImport = (currentTargetValue) => {
        setInputValue(currentTargetValue);
    };

    return (
        <>
            <Navbar />
            <Nav inputValue={inputValue} onChangeInput={handleChangeImport} />
            <Main lists={lists}  />
        </>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
