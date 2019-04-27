import {
    RECEIVE_REGISTRATION_DATA,
    ERROR_REGISTRATION_DATA
} from '../actions/types';

const initialState = {
    user: {},
    error: false,
};

function userRegistration(state = initialState, action) {
    switch (action.type) {

        case RECEIVE_REGISTRATION_DATA: {
            return {
                ...state,
                user: action.payload,
                error: false
            };
        }

        case ERROR_REGISTRATION_DATA: {
            return {
                ...state,
                error: true,
            };
        }

        default: {
            return state;
        }
    }
}

export function getUser(state) {
    return state.userRegistration.user;
}

export function getRegistrationDataError(state) {
    return state.userRegistration.user;
}

export default userRegistration;
