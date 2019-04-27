import { combineReducers } from 'redux';
import app from '../main/services/reducers/reducers';
import logInInformation from '../scenes/login/services/reducers/reducers';
import userRegistration from '../scenes/registration/services/reducers/reducers';

const reducers = combineReducers({
    app,
    logInInformation: logInInformation,
    userRegistration,

});

export default reducers;