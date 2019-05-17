import React from 'react';
import { Table, Popover, Button, List } from 'antd';
import './groups-list.scss';
import '../../../../core/components/custom-table/custom-table.scss';

import * as PropTypes from 'prop-types';

class GroupsList extends React.Component {

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
        return this.props.groups.map((el, index) => {
            return {
                key: index,
                name: el.name
            };
        });
    }

    columns = [{
        title: 'Название',
        dataIndex: 'name',
        className: 'custom-table-title groups-title-name',
    }, {
        dataIndex: 'options',
        className: 'custom-table-title groups-title-options',
        render: () => (
            <Popover content={this.popoverContent}>
                <Button className="groups-optional-btn" shape="circle" icon="ellipsis" type="primary"/>
            </Popover>)
    }];

    render() {
        return (
            <Table
                className="custom-table group-list"
                columns={this.columns}
                dataSource={this.getData()}
                pagination={false}
                scroll={{y: 323}}
                bordered
            />
        );
    }
}

export default GroupsList;
