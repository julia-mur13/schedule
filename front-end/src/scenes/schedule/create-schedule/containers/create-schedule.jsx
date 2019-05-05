import React from 'react';
import './create-schedule.scss';
import SchedulePopup from "../../all-schedules-page/components/schedule-popup";


class CreateSchedule extends React.Component {

    render() {
        return (
            <div className="classrooms-grid">
                <SchedulePopup/>
            </div>
        );
    }
}

export default CreateSchedule;
