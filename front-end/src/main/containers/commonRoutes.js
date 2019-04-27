import HelloPage from "../../scenes/hello-page/hello-page";
import Registration from "../../scenes/registration/containers/registration";
import LogIn from "../../scenes/login/containers/login";
import AllSchedulesPage from "../../scenes/all-schedules-page/containers/all-schedules-page";


export const COMMON_ROUTES = [
    {
        key: 'hello',
        url: '/hello',
        users: ['GUEST', 'STUDENT'],
        component: HelloPage
    }, {
        key: 'registration',
        url: '/registration',
        users: ['GUEST'],
        component: Registration
    }, {
        key: 'login',
        url: '/login',
        users: ['GUEST', 'STUDENT'],
        component: LogIn
    }, {
        key: 'all_schedules',
        url: '/all_schedules',
        users: ['STUDENT'],
        component: AllSchedulesPage
    }
];