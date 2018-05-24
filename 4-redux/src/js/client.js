import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios"; // XHR request;

const reducer = (state={}, action) => {
  return state;
}

const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"})
  axios.get("http://rest.learncode.academy/api/wstern/users")
    .then((response) => {
      dispatch({type: "RECEIVE_USERS", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "FETCH_USERS_ERROR", payload: err})
    })
}
