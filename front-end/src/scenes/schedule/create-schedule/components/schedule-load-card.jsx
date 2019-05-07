import React from 'react';
import {Button, Card, Tooltip, Tag} from 'antd';
import './schedule-load-card.scss';
import '../../../../core/components/custom-card/custom-card.scss';
import ScheduleLoadPopup from "./schedule-load-popup";

class ScheduleLoadCard extends React.Component {
    state = {
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        visible: false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({tags});
    };

    handleInputConfirm = () => {
        const {inputValue} = this.state;
        let {tags} = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.setState({
            tags
        });
    };

    addLoad() {

    }

    render() {
        const {tags} = this.state;

        const colorArr = ['blue', 'volcano', 'purple', 'magenta', 'lime', 'green', 'gold', 'orange', 'red', 'cyan', 'geekblue'];
        return (
            <Card
                size="small"
                title="Нагрузка"
                extra={<Button className="card-btn-add" shape="circle" icon="plus" type="primary"
                               onClick={() => this.showModal()}/>}
                className={this.props.className + ' ' + 'custom-card' + ' ' + 'schedule-load-card'}
            >
                <div>
                    {tags.map((tag) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag key={tag} closable={true} color={colorArr[Math.floor(Math.random() * colorArr.length)]}
                                 onClose={() => this.handleClose(tag)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        );
                        return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                    })}
                </div>
                <ScheduleLoadPopup visible={this.state.visible}
                                   handleOk={this.handleOk}
                                   handleCancel={this.handleCancel}/>
            </Card>
        );
    }
}

export default ScheduleLoadCard;

