/* eslint-disable import/no-cycle */
import { ADD_TEACHER } from './types';

export function addTeacher(teacher) {
    return {
        type: ADD_TEACHER,
        payload: teacher,
    };
}
