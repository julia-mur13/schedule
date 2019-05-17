import { ADD_TEACHER } from '../actions/types';

const initialState = [{
    lastName: 'Мазаник',
    firstName: 'Cергей',
    middleName: 'Алексеевич',
    subjects: ['Мат. анализ'],
    groups: [1, 2, 3]
}, {
    lastName: 'Пазюра',
    firstName: 'Екатерина',
    middleName: 'Васильевна',
    subjects: ['Программирование'],
    groups: [1, 2, 3]
}, {
    lastName: 'Карпович',
    firstName: 'Наталья',
    middleName: 'Александровна',
    subjects: ['Программирование'],
    groups: [1, 2, 3]
}, {
    lastName: 'Калинин',
    firstName: 'Анатолий',
    middleName: 'Иосифович',
    subjects: ['ТМ'],
    groups: [1, 2, 3]
}, {
    lastName: 'Василенко',
    firstName: 'Жанна',
    middleName: 'Витальевна',
    subjects: ['Программирование'],
    groups: [1, 2, 3]
}];

function teachers(state = initialState, action) {
    switch (action.type) {

        case ADD_TEACHER: {
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

export default teachers;
