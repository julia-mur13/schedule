import { ADD_TIME } from '../actions/types';

const initialState = [{
    start: '8:15',
    end: '9:35'
}, {
    start: '9:45',
    end: '11:05'
}, {
    start: '11:15',
    end: '12:35'
}, {
    start: '13:00',
    end: '14:20'
}, {
    start: '14:30',
    end: '15:50'
}];

function time(state = initialState, action) {
    switch (action.type) {

        case ADD_TIME: {
            return [
                action.payload,
                ...state,
            ];
        }

        default: {
            return state;
        }
    }
}

export default time;
