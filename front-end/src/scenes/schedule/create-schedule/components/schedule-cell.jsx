import React from 'react';
import './schedule-cell.scss';

class ScheduleCell extends React.Component {

    render() {
        const {teacher, lesson, classroom} = this.props;
        return (
            <div className="schedule-cell">
                <h3 className="cell-text cell-lesson-name">{lesson}</h3>
                <h3 className="cell-text cell-teacher-name">{teacher}</h3>
                <h3 className="cell-text cell-classroom-number">{classroom}</h3>
            </div>
        );
    }
}

export default ScheduleCell;
