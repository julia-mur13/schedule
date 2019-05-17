import React from 'react';
import { Button, Card, Tooltip, Tag} from 'antd';
import './schedule-load-card.scss';
import '../../../../core/components/custom-card/custom-card.scss';
import ScheduleLoadPopup from './schedule-load-popup';
import * as PropTypes from 'prop-types';

class ScheduleLoadCard extends React.Component {

    propTypes = {
        addWorkLoad: PropTypes.func.isRequired,
        workLoads: PropTypes.array.isRequired,
        subjects: PropTypes.array.isRequired,
        teachers: PropTypes.array.isRequired,
        setSelectedLoad: PropTypes.func.isRequired
    };

    state = {
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

    onClickTag = (e) => {
        const {setSelectedLoad, workLoads} = this.props;
        const index = e.target.getAttribute('index');
        setSelectedLoad((index)? workLoads[index]: null);
    };

    addLoad() {
    //     loadFile();
    }

    render() {
        const tags = this.props.workLoads;
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
                    {tags.map((tag, index) => {
                        const tagName = (tag.subject) ? tag.subject : '';
                        const isLongTag = tagName.length > 20;
                        const tagElem = (
                            <Tag key={tagName} index={index} closable={true}
                                 onClick={this.onClickTag}
                                 color={colorArr[Math.floor(Math.random() * colorArr.length)]}
                                 onClose={() => this.handleClose(tagName)}>
                                {isLongTag ? `${tagName.slice(0, 20)}...` : tagName}
                            </Tag>
                        );
                        return isLongTag ? <Tooltip title={tagName} key={tagName}>{tagElem}</Tooltip> : tagElem;
                    })}
                </div>
                {/*<Button className="card-btn-add" shape="circle" icon="plus" type="primary"*/}
                    {/*onClick={(e) => this.addLoad(e)}></Button>*/}
                <ScheduleLoadPopup visible={this.state.visible}
                                   handleOk={this.handleOk}
                                   handleCancel={this.handleCancel}
                                   addWorkLoad={this.props.addWorkLoad}
                                   subjects={this.props.subjects}
                                   teachers={this.props.teachers}

                />
                {/*<Helmet>*/}
                    {/*<script src="https://use.typekit.net/foobar.js"></script>*/}
                {/*</Helmet>*/}
            </Card>
        );
    }
}

export default ScheduleLoadCard;

