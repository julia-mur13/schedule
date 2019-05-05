export const MENU_ITEMS = [{
    userRoles: ['GUEST'],
    key: 'login',
    title: 'Авторизация',
    items: []
}, {
    userRoles: ['GUEST'],
    key: 'registration',
    title: 'Регистрация',
    items: []
}, {
    userRoles: ['STUDENT', 'TEACHER'],
    key: 'schedule',
    title: 'Расписание',
    items: [{
        key: 'create_schedule',
        title: 'Создать'
    }, {
        key: 'all_schedules',
        title: 'Посмотреть все'
    }]
}, {
    userRoles: ['TEACHER'],
    key: 'input_data',
    title: 'Входные данные',
    items: [{
        key: 'classrooms',
        title: 'Аудитории'
    }, {
        key: 'teachers',
        title: 'Преподаватели'
    }]
}, {
    userRoles: ['STUDENT'],
    key: 'chat',
    title: 'Чат',
    items: [{
        key: '',
        title: ''
    }]
}];