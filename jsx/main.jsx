import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import {reducer} from './reducers';
import LipsBox from './container/lipsBox';
import * as actions from './actions';

const logger = createLogger();
const middleware = applyMiddleware(logger);
const initialState = {
  count: 5,
  selectedOption: "paragraphs"
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
  <LipsBox/>
</Provider>, document.getElementById("app"));
