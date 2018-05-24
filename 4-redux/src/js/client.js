import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios"; // XHR request;
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return {...state, fetching: true};
    case "FETCH_USERS_REJECTED":
      return {...state, fetching: false, error: action.payload};
    case "RECEIVE_USERS_FULFILLED":
      return {...state, fetching: false, fetched: true, users: action.payload};
    default:
      return state;
    }
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
});
