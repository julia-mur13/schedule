import React from 'react';
import * as PropTypes from 'prop-types';
import './schedule-cell.scss';

class ScheduleCell extends React.Component {

    propTypes = {
        schedule: PropTypes.array.isRequired,
        fillScheduleCell: PropTypes.func.isRequired,
        selectedLoad: PropTypes.object.isRequired
    };

    state = {
        isRendered: false,
    };

    onClick(e) {
        const {lesson, fillScheduleCell, selectedLoad, mk} = this.props;
        console.log(e.target.closest('.ant-table-row').dataset.rowKey);
        console.log('group: ', e.target.closest('.ant-table-row').dataset.rowKey);
        fillScheduleCell({
            group: e.target.closest('.ant-table-row').dataset.rowKey,
            lesson: lesson,
            ...selectedLoad

        });
        this.setState({
            isRendered: !this.state.isRendered
        });
    }

    render() {
        const {teacher, subject, classroom} = this.props;
        return (
            <div className="schedule-cell" onClick={(e) => this.onClick(e)}>
                <h3 className="cell-text cell-lesson-name">{(subject) ? subject : ''}</h3>
                <h3 className="cell-text cell-teacher-name">{(teacher) ? teacher : ''}</h3>
                <h3 className="cell-text cell-classroom-number">{(classroom) ? classroom : ''}</h3>
            </div>
        );
    }
}

export default ScheduleCell;
