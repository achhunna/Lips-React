import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import {reducer} from './reducers';
import {LipsBox} from './container/lipsBox';

const logger = createLogger();
const initialState = {name: "achhunna"};
const store = createStore(reducer, initialState, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
    type: "test_action",
});

ReactDOM.render(
    <Provider store={store}>
        <LipsBox />
    </Provider>,
    document.getElementById("app")
);
