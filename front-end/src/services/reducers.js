import { combineReducers } from 'redux';
import app from '../main/services/reducers/reducers';
import logIn from "../scenes/login/services/reducers/reducers";

const reducers = combineReducers({
    app,
    logInInformation: logIn,

});

export default reducers;