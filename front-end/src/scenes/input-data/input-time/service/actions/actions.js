/* eslint-disable import/no-cycle */
import { ADD_TIME } from './types';

export function addTime(time) {
    return {
        type: ADD_TIME,
        payload: time,
    };
}
