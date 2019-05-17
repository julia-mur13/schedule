import { ADD_SUBJECT } from '../actions/types';

const initialState = [{
    name: 'ИСО',
    classrooms: ['Практическая', 'Лекционная']
}, {
    name: 'Мат. анализ',
    classrooms: ['Практическая', 'Лекционная']
}, {
    name: 'Программирование',
    classrooms: ['Практическая', 'Лекционная']
}, {
    name: 'ТМ',
    classrooms: ['Практическая', 'Лекционная']
}, {
    name: 'ДУ',
    classrooms: ['Практическая', 'Лекционная']
}];

function subjects(state = initialState, action) {
    switch (action.type) {

        case ADD_SUBJECT: {
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

export default subjects;
