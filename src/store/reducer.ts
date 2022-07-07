import { combineReducers } from 'redux';
import counterReducer from './slices/counter';

const reducers = { counterReducer };

export const rootReducer = combineReducers(reducers);
