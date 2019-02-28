import { combineReducers } from 'redux';
import app from '../main/services/reducers/reducers';

const reducers = combineReducers({
    app,
});

export default reducers;