import { combineReducers } from 'redux';
import app from '../main/service/reducers/reducers';
import logInInformation from '../scenes/login/service/reducers/reducers';
import userRegistration from '../scenes/registration/service/reducers/reducers';

const reducers = combineReducers({
    app,
    logInInformation: logInInformation,
    userRegistration,

});

export default reducers;