import React from 'react';
import './schedule-table.scss';
import {Table} from "antd";
import ScheduleCell from "./schedule-cell";


class ScheduleTable extends React.Component {

    getData() {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                number: i + 1,
                monday1: {
                    lesson: `Мат анализ${i + 1}`,
                    teacher: `Мазаник${i + 1}`,
                    classroom: '255'
                },
                monday2: {
                    lesson: `ТМ${i + 1}`,
                    teacher: `Калинин${i + 1}`,
                    classroom: '248'
                }
            })
        }
        return data;
    }

    getColumns() {
        const columns = [{
            title: 'Группа',
            dataIndex: 'groups',
            key: 'groups',
            width: 55,
            className: 'st-title-number st-border-right',
            fixed: 'left',
            children: [{
                title: '№',
                dataIndex: 'number',
                key: 'number',
                className: 'st-title-number st-border-right'
            }]
        }];
        const days = [{
            name: 'Понедельник',
            key: 'monday'
        }, {
            name: 'Вторник',
            key: 'tuesday'
        }, {
            name: 'Среда',
            key: 'wednesday'
        }, {
            name: 'Четверг',
            key: 'thursday'
        }, {
            name: 'Пятница',
            key: 'friday'
        }, {
            name: 'Суббота',
            key: 'saturday'
        }];

        days.forEach((day) => {
            const dayObj = {};
            const children = [];
            const key = day.key;
            const name = day.name;
            dayObj.title = name;
            dayObj.className = 'st-title-day st-border-left st-border-right';
            for (let j = 1; j < 6; j++) {
                children.push({
                    title: j,
                    dataIndex: `${key + j}`,
                    key: `${key + j}`,
                    className: `st-title-lesson ${(j === 0) ? 'st-border-left' : ''} ${(j === 5) ? 'st-border-right' : ''}`,
                    render: (text) => <ScheduleCell teacher={(text && text.teacher) ? text.teacher : ''}
                                                    lesson={(text && text.lesson) ? text.lesson : ''}
                                                    classroom={(text && text.classroom) ? text.classroom : ''} />
                });
            }
            dayObj.children = children;
            columns.push(dayObj);
        });
        return columns;
    }

    render() {
        return (
            <Table
                className="schedule-table"
                columns={this.getColumns()}
                dataSource={this.getData()}
                pagination={false}
                bordered
                size="middle"
                scroll={{x: '130%', y: 240}}
            />
        );
    }
}

export default ScheduleTable;
