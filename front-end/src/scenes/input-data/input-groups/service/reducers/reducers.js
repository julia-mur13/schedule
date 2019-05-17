import { ADD_GROUP } from '../actions/types';

const initialState = [{
    name: 'Группа 1',
    id: 1
}, {
    name: 'Группа 2',
    id: 2
}, {
    name: 'Группа 3',
    id: 3
}, {
    name: 'Группа 4',
    id: 4
}, {
    name: 'Группа 5',
    id: 5
}];

function groups(state = initialState, action) {
    switch (action.type) {

        case ADD_GROUP: {
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

export default groups;
