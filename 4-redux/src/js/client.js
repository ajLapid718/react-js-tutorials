import { combineReducers createStore } from 'redux';

// ACTION NAMING;
const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_AGE = "CHANGE_AGE";

const initialUserState = {
  user: {
    name: "Will",
    age: 35
  }
};

const initialTweetsState = {
  tweets: []
};

const userReducer = (prevState = initialUserState, action) => {
  let newState = Object.assign({}, prevState);
  switch(action.type) {
    case CHANGE_NAME:
      newState.name = action.payload;
      return newState;
    case CHANGE_AGE:
      newState.age = action.payload;
      return newState;
    default:
      return prevState;
  }
}

const tweetsReducer = (prevState = initialTweetsState, action) => {
  let newState = Object.assign({}, prevState);
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
store.dispatch({type: CHANGE_NAME, payload: "Allan"});
store.dispatch({type: CHANGE_AGE, payload: "23"});
