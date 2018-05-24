import { createStore } from "redux";

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

// Store;
const store = createStore(reducer, 1, )
