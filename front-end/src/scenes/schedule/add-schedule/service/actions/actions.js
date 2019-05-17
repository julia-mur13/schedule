/* eslint-disable import/no-cycle */
import {
    SET_ADDED_SCHEDULE_NAME,
    ADD_WORKLOAD,
    SET_SELECTED_LOAD,
    FILL_SCHEDULE_CELL
} from './types';

export function setAddedScheduleName(name) {
    return {
        type: SET_ADDED_SCHEDULE_NAME,
        payload: name
    };
}

export function setSelectedLoad(load) {
    return {
        type: SET_SELECTED_LOAD,
        payload: load
    };
}

export function addWorkLoad(workLoad) {
    return {
        type: ADD_WORKLOAD,
        payload: workLoad
    };
}

export function fillScheduleCell(workLoad) {
    return {
        type: FILL_SCHEDULE_CELL,
        payload: workLoad
    };
}
