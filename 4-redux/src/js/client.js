import { applyMiddleware, createStore } from "redux";

// Action Naming;
const INC = "INC";
const DEC = "DEC";

// Reducer;
const reducer = (initialState = 0, action) => {
  switch(action.type) {
    case INC:
      return initialState + action.payload;
    case DEC:
      return initialState - action.payload;
    default:
      return initialState;
  }
}

// Middleware;
const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
}

const middleware = applyMiddleware(logger);

// Store;
const store = createStore(reducer, 1, middleware)

// Dispatch;
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 10});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
