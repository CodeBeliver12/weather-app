import { combineReducers } from 'redux';
import appState from './app-state';

const allReducers = combineReducers({
    appState: appState
});

const rootReducer = (state, action) => {
    return allReducers(state, action);
};

export default rootReducer;
