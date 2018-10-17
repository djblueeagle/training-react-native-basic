import { createStore, createAppropriateStore } from 'redux';

import reducers from './reducers'; //Import the reducer


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

// Connect our store to the reducers
export default store;
