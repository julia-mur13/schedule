import HelloPage from "../../scenes/hello-page/container/hello-page";
import Registration from "../../scenes/registration/containers/registration";
import LogIn from "../../scenes/login/containers/login";
import AllSchedulesPage from "../../scenes/schedule/all-schedules-page/containers/all-schedules";
import InputClassrooms from "../../scenes/input-data/input-classrooms/container/input-classrooms";
import CreateSchedule from "../../scenes/schedule/create-schedule/containers/create-schedule";
import InputTeachers from "../../scenes/input-data/input-teachers/container/input-teachers";


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
        key: 'create_schedules',
        url: '/schedule/create_schedules',
        component: CreateSchedule
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
    }
];
