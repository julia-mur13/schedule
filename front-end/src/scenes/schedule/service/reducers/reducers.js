import { combineReducers } from 'redux';
import allSchedules from '../../all-schedules/service/reducers/reducers';
import addSchedule from '../../add-schedule/service/reducers/reducers';

const schedules = combineReducers({
    allSchedules,
    addSchedule
});

export default schedules;
