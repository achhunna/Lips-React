import {combineReducers} from 'redux';
// Reducer: function that takes state and action and returns new state
export const reducer = (state = {num: 5}, action) => {
    switch(action.type) {
        case "updateCount":
            return Object.assign({}, state, { num: action.payLoad });
        default:
            return state;
    }
    //return null;
};

const mainReducer = combineReducers({
    reducer
});

//export default mainReducer;
