//Largely speaking, you want to write your Reducer immediately after you get done structuring files and getting basic app features done. Now would be a good time to save and commit if you haven't.

import { REQUEST_JOKE, JOKE_RECEIVED, REQUEST_FAILED } from "../actions";

const initialState = {
    joke: null,
    busy: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_JOKE:
            return ({
                ...state,
                busy: true
            });
        case JOKE_RECEIVED:
            return ({
                ...state,
                joke: action.payload,
                busy: false,
                error: ''
            });
        case REQUEST_FAILED:
            return ({
                ...state,
                busy: false,
                error: action.payload
            });
        default:
            return (state);
    }
}

export default reducer;