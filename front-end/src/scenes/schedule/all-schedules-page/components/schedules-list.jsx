import React from 'react';
import {Table, Popover, Button, List} from 'antd';
import './schedules-list.scss';

class SchedulesList extends React.Component {

    popoverData = [
        'Изменить название',
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

    columns = [{
        title: 'Название',
        dataIndex: 'name',
        className: 'sl-table-title',
        // render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: 'Автор',
        dataIndex: 'author',
        className: 'sl-table-title',
    }, {
        title: 'Дата создания',
        dataIndex: 'date',
        className: 'sl-table-title'
    }, {
        dataIndex: 'options',
        className: 'sl-table-options',
        render: () => (
            <Popover content={this.popoverContent}>
                <Button className="sl-optional-btn" shape="circle" icon="ellipsis" type="primary"/>
            </Popover>)
    }];

    getData() {
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push({
                key: i,
                name: `Расписание ${i}`,
                author: `Джон Праймс ${i}`,
                date: i,
            })
        }
        return data;
    }

    render() {
        return (
            <Table
                className="sl-table"
                columns={this.columns}
                dataSource={this.getData()}
                pagination={false}
                scroll={{y: 323}}
                bordered
            />
        );
    }
}

export default SchedulesList;
