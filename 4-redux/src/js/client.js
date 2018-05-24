import { createStore } from 'redux';

// Action Naming;
const INC = "INC";
const DEC = "DEC";

// Reducer;
const reducer = function(state, action) {
  switch(action.type) {
    case INC:
      return state + action.payload;
    case DEC:
      return state + action.payload;
    default:
      return state;
    }
}

// Store;
const store = createStore(reducer, 0);

// Subscribe;
store.subscribe(() => {
  console.log("store changed", store.getState());
})

// Dispatch;
store.dispatch({type: INC, payload: 1});
store.dispatch({type: INC, payload: 1});
store.dispatch({type: DEC, payload: 1});
store.dispatch({type: INC, payload: 1});
store.dispatch({type: INC, payload: 1});
