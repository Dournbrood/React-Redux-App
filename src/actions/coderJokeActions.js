//This is where magic happens. Here, you're going to be defining action types, dispatching, and doing API requests.
import axios from 'axios';

export const REQUEST_JOKE = "REQUEST_JOKE";
export const JOKE_RECEIVED = "JOKE_RECEIVED";
export const REQUEST_FAILED = "REQUEST_FAILED";

//Invoking dispatch() anywhere inside this function will update our reducers' states. Be mindful.
export const requestCoderJoke = () => dispatch => {
    dispatch({ type: REQUEST_JOKE });
    console.log("BUTTON PRESS");
    axios
        .get("https://official-joke-api.appspot.com/jokes/programming/random")
        .then((response) => {
            console.log(response);
            dispatch({ type: JOKE_RECEIVED, payload: response.data[0] })
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: REQUEST_FAILED, payload: error.response })
        })
}

// const getJoke = () => {
//   return((dispatch) => {
//     dispatch({ type: 'FETCH_JOKE_START' });
//   });
// };
