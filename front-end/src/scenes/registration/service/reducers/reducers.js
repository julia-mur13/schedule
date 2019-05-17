import {
    RECEIVE_REGISTRATION_DATA,
    ERROR_REGISTRATION_DATA
} from '../actions/types';

const initialState = {
    user: {},
    error: false,
};

function registration(state = initialState, action) {
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

export default registration;
