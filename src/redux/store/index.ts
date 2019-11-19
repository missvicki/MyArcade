import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';

const createReducer = (initialState: any, handlers: { [x: string]: (arg0: any, arg1: any) => any; }) => {
    return (state = initialState, action: { type: string | number; }) => {
        return (handlers[action.type] && handlers[action.type](state, action)) || state;
    }
};

const rootReducer = combineReducers({});

export default createStore(rootReducer, {}, applyMiddleware(thunk));
