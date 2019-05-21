import {
    SET_ADDED_SCHEDULE_NAME,
    ADD_WORKLOAD,
    SET_SELECTED_LOAD,
    FILL_SCHEDULE_CELL
} from '../actions/types';

import { DAYS } from './consts';

const initialState = {
    name: '',
    workLoads: [{}],
    selectedLoad: {},
    schedule: [[[{}]]]
};

function addSchedule(state = initialState, action) {
    switch (action.type) {

        case FILL_SCHEDULE_CELL: {
            console.log(action.payload);
            const data = action.payload;
            const newState = state.schedule;
            const lessonIndex = +data.lesson.match(/\d+$/)[0];
            const currentDay = data.lesson.match(/[a-zA-Z]/g).join('').toLowerCase();
            const dayIndex = DAYS.indexOf(currentDay);
            let groupData = newState[data.group];
            if (!groupData) {
                groupData = [];
            }
            console.log("dayIndex: ", dayIndex);
            if(!groupData[dayIndex]){
                groupData[dayIndex] = [];
            }
            groupData[dayIndex][lessonIndex] = action.payload;
            newState[data.group] = groupData;
            return {
                ...state,
                schedule: newState
            };
        }

        case SET_ADDED_SCHEDULE_NAME: {
            return {
                ...state,
                name: action.payload
            };
        }

        case SET_SELECTED_LOAD: {
            return {
                ...state,
                selectedLoad: action.payload
            };
        }

        case ADD_WORKLOAD: {
            return {
                ...state,
                workLoads: [
                    action.payload,
                    ...state.workLoads,
                ]
            };
        }

        default: {
            return state;
        }
    }
}

export default addSchedule;
