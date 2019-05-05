import requestLoginInformation from '../../../../services/login-service';

import {
    GET_USER_DATA,
    LOG_IN,
    RECEIVE_LOGIN_DATA,
    ERROR_LOGIN_DATA,
    GET_ERROR_FALSE,
} from '../actions/types';

const initialState = {
    user: requestLoginInformation() || {role: 'GUEST'},
    error: false,
};

function logInInformation(state = initialState, action) {
    switch (action.type) {

        case LOG_IN: {
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
            };
        }

        case GET_ERROR_FALSE: {
            return {
                ...state,
                error: false,
            };
        }

        case RECEIVE_LOGIN_DATA: {
            return {
                ...state,
                data: action.payload,
                error: false
            };
        }

        case GET_USER_DATA: {
            if (action.payload.text !== 'Bad credentials') {
                return {
                    ...state,
                    user: action.payload,
                    error: false
                };
            }
            return {
                ...state,
                error: true
            };
        }

        case ERROR_LOGIN_DATA: {
            return {
                ...state,
                error: true
            };
        }

        default: {
            return state;
        }
    }
}

export function getUser(state) {
    return state.logInInformation.user;
}

export function getUserDataError(state) {
    return state.logInInformation.error;
}

export default logInInformation;
