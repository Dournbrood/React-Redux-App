import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducer from "./reducers";

//In general, this is what we want to be importing.
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

//First we will need to create all our directories and set up and export a reducer somewhere else, then import


//Then we do this...
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create our store.
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

//And render everything. Yay!
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));