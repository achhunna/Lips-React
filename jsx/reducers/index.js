import {action} from '../actions';
// Reducer: function that takes state and action and returns new state
export const reducer = (store, action) => {
    switch(action.type) {
        case "test_action":
            return store;
        default:
            return store;
    }
    //return null;
};
