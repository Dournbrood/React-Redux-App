import React from "react";

//First, we need our connector.
import { connect } from "react-redux";

//Our component
const CoderJoke = props => {
    return (
        <div>
            <h1>Programming Jokes that have a non-zero probability of a laughter response!</h1>
            <button>Ping Jokebot!</button>
        </div>
    )
}

//defining mapStateToProps. This is mostly the same every time.
const mapStateToProps = state => {
    return {

    }
}

//export the connect function. This gives us access to state and methods from our reducer.
export default connect(
    mapStateToProps,
    {}
)(CoderJoke);