import { combineReducers } from 'redux';
import portalReducer from './slices/counter';

const reducers = { portalReducer };

export const rootReducer = combineReducers(reducers);
