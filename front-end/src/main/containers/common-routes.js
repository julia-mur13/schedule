import HelloPage from '../../scenes/hello-page/container/hello-page';
import Registration from '../../scenes/registration/containers/registration';
import LogIn from '../../scenes/login/container/login';
import AllSchedulesPage from '../../scenes/schedule/all-schedules/containers/all-schedules';
import InputClassrooms from '../../scenes/input-data/input-classrooms/container/input-classrooms';
import AddSchedule from '../../scenes/schedule/add-schedule/containers/add-schedule';
import InputTeachers from '../../scenes/input-data/input-teachers/container/input-teachers';
import InputSubjects from '../../scenes/input-data/input-subjects/container/input-subjects';
import InputGroups from '../../scenes/input-data/input-groups/container/input-groups';

export const COMMON_ROUTES = [
    {
        key: 'hello',
        url: '/hello',
        userRoles: ['GUEST', 'STUDENT', 'TEACHER'],
        component: HelloPage
    }, {
        key: 'registration',
        url: '/registration',
        userRoles: ['GUEST'],
        component: Registration
    }, {
        key: 'login',
        url: '/login',
        userRoles: ['GUEST'],
        component: LogIn
    }, {
        userRoles: ['STUDENT', 'TEACHER'],
        key: 'all_schedules',
        url: '/schedule/all_schedules',
        component: AllSchedulesPage
    }, {
        userRoles: ['TEACHER'],
        key: 'create_schedule',
        url: '/schedule/create_schedule',
        component: AddSchedule
    }, {
        key: 'classrooms',
        url: '/input_data/classrooms',
        userRoles: ['TEACHER'],
        component: InputClassrooms
    }, {
        key: 'teachers',
        url: '/input_data/teachers',
        userRoles: ['TEACHER'],
        component: InputTeachers
    }, {
        key: 'subjects',
        url: '/input_data/subjects',
        userRoles: ['TEACHER'],
        component: InputSubjects
    }, {
        key: 'groups',
        url: '/input_data/groups',
        userRoles: ['TEACHER'],
        component: InputGroups
    }
];
