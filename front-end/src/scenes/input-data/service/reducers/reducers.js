import {combineReducers} from "redux";
import classrooms from '../../input-classrooms/service/reducers/reducers';
import teachers from '../../input-teachers/service/reducers/reducers';
import subjects from '../../input-subjects/service/reducers/reducers';
import groups from '../../input-groups/service/reducers/reducers';
import time from '../../input-time/service/reducers/reducers';

const inputData = combineReducers({
    classrooms,
    teachers,
    subjects,
    groups,
    time
});

export default inputData;
