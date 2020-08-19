import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Nav from "../Nav/Nav";

const Main = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChangeImport = (currentTargetValue) => {
        setInputValue(currentTargetValue);
    };
    return (
        <>
            <Navbar />
            <Nav inputValue={inputValue} onChangeInput={handleChangeImport} />
        </>
    );
};

export default Main;
