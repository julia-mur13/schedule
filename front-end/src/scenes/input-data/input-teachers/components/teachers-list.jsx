import React from 'react';
import { Table, Popover, Button, List, Icon } from 'antd';
import './teachers-list.scss';
import * as PropTypes from 'prop-types';

class TeachersList extends React.Component {

    static propTypes = {
        teachers: PropTypes.array.isRequired,
    };

    popoverData = [
        'Удалить'
    ];

    onClickOptions(e) {

    }

    popoverContent = (
        <List
            dataSource={this.popoverData}
            renderItem={item => (
                <List.Item className="sc-popover-item">
                    <div onClick={(e) => this.onClickOptions(e)}>{item}</div>
                </List.Item>)}
        />
    );

    getData() {
        return this.props.teachers.map((el, index) => {
            return {
                key: index,
                name: el.lastName + ' ' + el.firstName[0].toUpperCase() + '. ' + el.middleName[0].toUpperCase() + '.',
                subjects: el.subjects,
                groups: el.groups.join(', ')
            };
        });
    }

    columns = [{
        title: <div className="title-name-wrapper">
            <div>ФИО</div>
            <Icon className="title-icon-search" type="search"/></div>,
        dataIndex: 'name',
        className: 'tl-table-name',
        // render: text => {text},
    }, {
        title: 'Дисциплины',
        dataIndex: 'subjects',
        className: 'tl-title-info',
    }, {
        title: 'Группы',
        dataIndex: 'groups',
        className: 'tl-title-info',
    }, {
        dataIndex: 'options',
        className: 'tl-table-options',
        render: () => (
            <Popover content={this.popoverContent}>
                <Button className="tl-optional-btn" shape="circle" icon="ellipsis" type="primary"/>
            </Popover>)
    }];

    render() {
        return (
            <Table
                className="tl-table"
                columns={this.columns}
                dataSource={this.getData()}
                pagination={false}
                scroll={{y: 323}}
                bordered
            />
        );
    }
}

export default TeachersList;
