import {action} from '../actions';

export const reducer = (store, action) => {
    switch(action.type) {
        case "test_action":
            return store;
        default:
            return store;
    }
    //return null;
};
