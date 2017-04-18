import {combineReducers} from 'redux';

// Reducer: function that takes state and action and returns new state
export const reducer = (state, action) => {
    switch(action.type) {
        case "updateCount":
            return Object.assign({}, state, { count: action.payLoad });
        case "updateSelectedOption":
            return Object.assign({}, state, { selectedOption: action.payLoad });
        default:
            return state;
    }
};

const mainReducer = combineReducers({
    reducer
});

//export default mainReducer;
