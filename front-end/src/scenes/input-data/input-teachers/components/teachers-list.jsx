import React from 'react';
import {Table, Popover, Button, List} from 'antd';
import './teachers-list.scss';

class TeachersList extends React.Component {

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

    columns = [{
        title: 'ФИО',
        dataIndex: 'name',
        className: 'tl-table-name',
        // render: text => {text},
    }, {
        title: 'Дисциплины',
        dataIndex: 'subjects',
        className: 'tl-table-subjects',
    }, {
        dataIndex: 'options',
        className: 'tl-table-options',
        render: () => (
            <Popover content={this.popoverContent}>
                <Button className="tl-optional-btn" shape="circle" icon="ellipsis" type="primary"/>
            </Popover>)
    }];

    getData() {
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push({
                key: i,
                name: `Джон Праймс ${i}`,
                subjects: `Матан ${i}, ИСО ${i}, ТМ ${i}`,
                date: i,
            })
        }
        return data;
    }

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
