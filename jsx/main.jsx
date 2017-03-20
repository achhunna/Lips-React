import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import {reducer} from './reducers';
import LipsBox from './container/lipsBox';
import {updateCount} from './actions';

const logger = createLogger();
const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch(updateCount(10));

ReactDOM.render(
    <Provider store={store}>
        <LipsBox />
    </Provider>,
    document.getElementById("app")
);
