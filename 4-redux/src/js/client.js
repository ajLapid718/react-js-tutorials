import { createStore } from 'redux';

// Action Naming;
const INC = "INC";

// Reducer;
const reducer = function(state, action) {
  if (action.type === INC) {
    return state + action.payload;
  }
  return state;
}

// Store;
const store = createStore(reducer, 0);

// Subscribe;
store.subscribe(() => {
  console.log("store changed", store.getState());
})

// Dispatch;
store.dispatch({type: INC, payload: 1});
