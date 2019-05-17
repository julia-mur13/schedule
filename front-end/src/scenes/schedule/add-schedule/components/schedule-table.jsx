import React from 'react';
import './schedule-table.scss';
import * as PropTypes from 'prop-types';
import { Table } from 'antd';
import ScheduleCell from './schedule-cell';
import { DAY_NAMES } from '../service/reducers/consts';


class ScheduleTable extends React.Component {

    propTypes = {
        schedule: PropTypes.array.isRequired,
        fillScheduleCell: PropTypes.func.isRequired,
        selectedLoad: PropTypes.object.isRequired,
        groups: PropTypes.array.isRequired
    };

    get days() {
        return [{
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
    }

    getData() {
        const {schedule, groups} = this.props;
        console.log('schedule: ', schedule[0][0]);
        const filledGroups = [];
        const data = [];
        schedule.forEach((group, index) => {
            const dayObj = {};
            DAY_NAMES.forEach((day, i) => {
                const key = day.key;
                for (let j = 0; j < 5; j++) {
                    if (!schedule[index]) {
                        schedule[index] = [];
                    }
                    if (!schedule[index][i]) {
                        schedule[index][i] = [];
                    }
                    dayObj[key + i + j] = schedule[index][i][j];
                    if(schedule[index][i][j]){
                        dayObj.number = groups[index].id;
                        filledGroups.push(groups[index].id);
                    }
                }
            });
            data.push(dayObj);
        });

        for (let i = data.length; i < groups.length; ++i) {
            data.push({number: groups[i].id})
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

        DAY_NAMES.forEach((day, i) => {
            const dayObj = {};
            const children = [];
            const key = day.key;
            dayObj.title = day.name;
            dayObj.className = 'st-title-day st-border-left st-border-right';
            for (let j = 0; j < 5; j++) {
                children.push({
                    title: j + 1,
                    dataIndex: `${key + i + j}`,
                    key: `${key + i + j}`,
                    className: `st-title-lesson ${(j === 0) ? 'st-border-left' : ''} ${(j === 4) ? 'st-border-right' : ''}`,
                    render: (text) => <ScheduleCell teacher={(text && text.teacher) ? text.teacher : ''}
                                                    subject={(text && text.subject) ? text.subject : ''}
                                                    classroom={(text && text.classroom) ? text.classroom : ''}
                                                    lesson={key + j}
                                                    group={(text && text.group) ? text.group : ''}
                                                    fillScheduleCell={this.props.fillScheduleCell}
                                                    selectedLoad={this.props.selectedLoad}
                    />
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
