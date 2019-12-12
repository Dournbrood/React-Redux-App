import React from "react";

//First, we need our connector.
import { connect } from "react-redux";

//Then the action for whatever we're trying to do

import { requestCoderJoke } from "../actions";

//And the most important bit... THE LOADER!
import Loader from "react-loader-spinner";

//Our component
const CoderJoke = props => {
    return (
        <div className="flex-col-center">
            <h1>Programming Jokes that have a non-zero probability of a laughter response!</h1>
            {!props.joke && !props.busy && <p>Click the button to generate funnies!</p>}
            {props.busy && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
            {props.joke && !props.busy && (
                <div className="wacky-border">
                    <p>{props.joke.setup}</p>
                    <p>{props.joke.punchline}</p>
                </div>
            )}
            {!props.joke && !props.busy && (<button onClick={props.requestCoderJoke}>Ping Jokebot!</button>)}
            {props.busy && (<button onClick={props.requestCoderJoke}>Pinging Jokebot...</button>)}
            {props.joke && !props.busy && (<button onClick={props.requestCoderJoke}>Gimme another one!</button>)}
        </div>
    )
}

//defining mapStateToProps. This is mostly the same every time.
const mapStateToProps = state => {
    return {
        joke: state.joke,
        busy: state.busy,
        error: state.error
    }
}

//export the connect function. This gives us access to state and methods from our reducer.
export default connect(
    mapStateToProps,
    { requestCoderJoke }
)(CoderJoke);