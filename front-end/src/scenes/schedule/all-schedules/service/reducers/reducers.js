import { LOG_IN } from '../actions/types';

const initialState = [{
    name: '',
    workLoads: [{
        classroomType: 'Практическая',
        teacher: 'Калинин',
        subject: 'ТМ',
        lessonsCount: 1
    }],
    selectedLoad: {},
    schedule: [[{
        group: 'Группа 1',
        daysData: [{
            classroom: '253',
            teacher: 'Калинин',
            subject: 'ТМ'
        }, {
            classroom: '218',
            teacher: 'Мазаник',
            subject: 'Матан'
        }, {
            classroom: '607',
            teacher: 'Пазюра',
            subject: 'Прога'
        }, {
            classroom: '234',
            teacher: 'Полойко',
            subject: 'ДС'
        }, {
            classroom: '506',
            teacher: 'Трубач',
            subject: 'ДС'
        }]
    }]]
}, {
    name: '',
    workLoads: [{
        classroomType: 'Практическая',
        teacher: 'Калинин',
        subject: 'ТМ',
        lessonsCount: 1
    }],
    selectedLoad: {},
    schedule: [[{
        group: 'Группа 1',
        daysData: [{
            classroom: '253',
            teacher: 'Калинин',
            subject: 'ТМ'
        }, {
            classroom: '218',
            teacher: 'Мазаник',
            subject: 'Матан'
        }, {
            classroom: '607',
            teacher: 'Пазюра',
            subject: 'Прога'
        }, {
            classroom: '234',
            teacher: 'Полойко',
            subject: 'ДС'
        }, {
            classroom: '506',
            teacher: 'Трубач',
            subject: 'ДС'
        }]
    }]]
}, {
    name: '',
    workLoads: [{
        classroomType: 'Практическая',
        teacher: 'Калинин',
        subject: 'ТМ',
        lessonsCount: 1
    }],
    selectedLoad: {},
    schedule: [[{
        group: 'Группа 1',
        daysData: [{
            classroom: '253',
            teacher: 'Калинин',
            subject: 'ТМ'
        }, {
            classroom: '218',
            teacher: 'Мазаник',
            subject: 'Матан'
        }, {
            classroom: '607',
            teacher: 'Пазюра',
            subject: 'Прога'
        }, {
            classroom: '234',
            teacher: 'Полойко',
            subject: 'ДС'
        }, {
            classroom: '506',
            teacher: 'Трубач',
            subject: 'ДС'
        }]
    }]]
}, {
    name: '',
    workLoads: [{
        classroomType: 'Практическая',
        teacher: 'Калинин',
        subject: 'ТМ',
        lessonsCount: 1
    }],
    selectedLoad: {},
    schedule: [[{
        group: 'Группа 1',
        daysData: [{
            classroom: '253',
            teacher: 'Калинин',
            subject: 'ТМ'
        }, {
            classroom: '218',
            teacher: 'Мазаник',
            subject: 'Матан'
        }, {
            classroom: '607',
            teacher: 'Пазюра',
            subject: 'Прога'
        }, {
            classroom: '234',
            teacher: 'Полойко',
            subject: 'ДС'
        }, {
            classroom: '506',
            teacher: 'Трубач',
            subject: 'ДС'
        }]
    }]]
}, {
    name: '',
    workLoads: [{
        classroomType: 'Практическая',
        teacher: 'Калинин',
        subject: 'ТМ',
        lessonsCount: 1
    }],
    selectedLoad: {},
    schedule: [[{
        group: 'Группа 1',
        daysData: [{
            classroom: '253',
            teacher: 'Калинин',
            subject: 'ТМ'
        }, {
            classroom: '218',
            teacher: 'Мазаник',
            subject: 'Матан'
        }, {
            classroom: '607',
            teacher: 'Пазюра',
            subject: 'Прога'
        }, {
            classroom: '234',
            teacher: 'Полойко',
            subject: 'ДС'
        }, {
            classroom: '506',
            teacher: 'Трубач',
            subject: 'ДС'
        }]
    }]]
}];

function allSchedules(state = initialState, action) {
    switch (action.type) {

        case LOG_IN: {
            return {
                ...state
            };
        }

        default: {
            return state;
        }
    }
}

export default allSchedules;
