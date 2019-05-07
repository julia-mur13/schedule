import React from 'react';
import {Button, Card} from 'antd';
import './schedule-information-card.scss';
import '../../../../core/components/custom-card/custom-card.scss';

class ScheduleInformationCard extends React.Component {

    render() {
        return (
            <Card
                size="small"
                title=" "
                className={this.props.className + ' custom-card'}
            >
            </Card>
        );
    }
}

export default ScheduleInformationCard;

