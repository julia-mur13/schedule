/* eslint-disable import/no-cycle */
import { ADD_SUBJECT } from './types';

export function addSubject(subject) {
    return {
        type: ADD_SUBJECT,
        payload: subject,
    };
}
