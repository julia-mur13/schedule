import React from 'react';
import { Table, Popover, Button, List } from 'antd';
import './subjects-list.scss';
import '../../../../core/components/custom-table/custom-table.scss';

import * as PropTypes from 'prop-types';

class SubjectsList extends React.Component {

    static propTypes = {
        subjects: PropTypes.array.isRequired,
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
        return this.props.subjects.map((el, index) => {
            return {
                key: index,
                name: el.name,
                сlassrooms: el.classrooms.join(', '),
            };
        });
    }

    columns = [{
        title: 'Название',
        dataIndex: 'name',
        className: 'custom-table-title subjects-title-name',
        // render: text => {text},
    }, {
        title: 'Типы аудиторий',
        dataIndex: 'сlassrooms',
        className: 'custom-table-title',
    }, {
        dataIndex: 'options',
        className: 'custom-table-title subjects-title-options',
        render: () => (
            <Popover content={this.popoverContent}>
                <Button className="subjects-optional-btn" shape="circle" icon="ellipsis" type="primary"/>
            </Popover>)
    }];

    render() {
        return (
            <Table
                className="custom-table subject-list"
                columns={this.columns}
                dataSource={this.getData()}
                pagination={false}
                scroll={{y: 323}}
                bordered
            />
        );
    }
}

export default SubjectsList;
