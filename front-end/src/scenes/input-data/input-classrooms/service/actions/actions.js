/* eslint-disable import/no-cycle */
import { ADD_CLASSROOM } from './types';

export function addClassroom(classroom) {
    return {
        type: ADD_CLASSROOM,
        payload: classroom,
    };
}
