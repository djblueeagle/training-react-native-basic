import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers'; //Import the reducer
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

sagaMiddleware.run(rootSagas);

// Connect our store to the reducers
export default store;
