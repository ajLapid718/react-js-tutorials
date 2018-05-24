import { combineReducers createStore } from 'redux';

const initialUserState = {
  user: {
    name: "Will",
    age: 35
  }
};

const initialTweetsState = {
  tweets: []
};

const userReducer = (prevState = initialUserState, actions) => {

}

const tweetsReducer = (prevState = initialTweetsState, actions) => {

}

const reducers = commbineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

// Store;
const store = createStore(reducers);

// Subscribe;
store.subscribe(() => {
  console.log("store changed", store.getState());
})

// Dispatch;
