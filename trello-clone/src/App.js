import React from "react";
import Main from "./Components/Main/Main/Main";
import { connect } from "react-redux";

const App = ({ lists }) => {
    return (
        <>
            <Main />
            {lists.map((list) => (
                <h1>{list.title}</h1>
            ))}
        </>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
