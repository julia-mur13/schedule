export function getAddedScheduleName(state) {
    return state.schedules.addSchedule.name;
}

export function getWorkLoads(state) {
    return state.schedules.addSchedule.workLoads;
}

export function getSelectedLoad(state) {
    return state.schedules.addSchedule.selectedLoad;
}

export function getAddedSchedule(state) {
    return state.schedules.addSchedule.schedule;
}

export function getGroupSchedule(state, groupNum) {
    const schedule = state.schedules.addSchedule.schedule;
    return schedule[groupNum];
}
