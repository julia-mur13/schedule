import { combineReducers } from 'redux';
import app from '../main/service/reducers/reducers';
import logIn from '../scenes/login/service/reducers/reducers';
import registration from '../scenes/registration/service/reducers/reducers';
import inputData from '../scenes/input-data/service/reducers/reducers';
import schedules from '../scenes/schedule/service/reducers/reducers';

const reducers = combineReducers({
    app,
    logIn,
    registration,
    inputData,
    schedules
});

export default reducers;