/* eslint-disable import/no-cycle */
import { ADD_GROUP } from './types';

export function addGroup(group) {
    return {
        type: ADD_GROUP,
        payload: group,
    };
}
