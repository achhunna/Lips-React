import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer';

import {LipsBox} from './container/lipsBox';

const store = createStore(reducer, 0);

ReactDOM.render(
    <Provider store={store}>
        <LipsBox />
    </Provider>,
    document.getElementById("app")
);
