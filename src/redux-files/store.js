import { combineReducers } from 'redux';

import { legacy_createStore as createStore} from 'redux'

import { numberOfClickReducer } from './reducers';

const rootReducer = combineReducers({
    numberOfClicks: numberOfClickReducer,
});

export const reduxStore = createStore(rootReducer);
