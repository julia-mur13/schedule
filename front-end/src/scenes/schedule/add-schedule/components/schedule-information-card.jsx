import React from 'react';
import { Card } from 'antd';
import './schedule-information-card.scss';
import '../../../../core/components/custom-card/custom-card.scss';
import * as PropTypes from 'prop-types';
import GeneralButton from '../../../../core/components/button/button';

class ScheduleInformationCard extends React.Component {

    propTypes = {
        selectedLoad: PropTypes.object.isRequired
    };

    sendSchedule() {

    }

    getTitle() {
        return (<div><GeneralButton text="Cохранить" className="send-schedule-btn" onClick={(e) => this.sendSchedule(e)}/></div>);
    }

    renderSelectedLoad() {
        const {selectedLoad} = this.props;
        if (selectedLoad && selectedLoad.subject) {
            return (
                <div>
                    <div>Предмет: {selectedLoad.subject}</div>
                    <div>Преподаватель: {selectedLoad.teacher}</div>
                    <div>Тип аудитории: {selectedLoad.classroomType}</div>
                    <div>Количество занятий: {selectedLoad.lessonsCount}</div>
                </div>);

        }
        return null;
    }

    render() {
        return (
            <Card
                size="small"
                title={this.getTitle()}
                className={this.props.className + ' custom-card'}
            >
                {this.renderSelectedLoad()}
            </Card>
        );
    }
}

export default ScheduleInformationCard;

