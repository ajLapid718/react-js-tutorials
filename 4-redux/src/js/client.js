import { combineReducers createStore } from 'redux';

const userReducer = (state, actions) => {

}

const tweetsReducer = (state, actions) => {

}

const reducers = commbineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

// Store;
const store = createStore(reducer, {
  user: {
    name: "Will",
    age: 35
  },
  tweets: []
});

// Subscribe;
store.subscribe(() => {
  console.log("store changed", store.getState());
})

// Dispatch;
