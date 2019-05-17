import { ADD_CLASSROOM } from '../actions/types';

const initialState = [
    {number: 235, type: 'Практическая'},
    {number: 607, type: 'Лекционная'},
    {number: 518, type: 'Практическая'},
    {number: 506, type: 'Лабораторная'},
    {number: 300, type: 'Спортивный зал'}];

function classrooms(state = initialState, action) {
    switch (action.type) {

        case ADD_CLASSROOM: {
            return [
                action.payload,
                ...state
            ];
        }

        default: {
            return state;
        }
    }
}

export default classrooms;
