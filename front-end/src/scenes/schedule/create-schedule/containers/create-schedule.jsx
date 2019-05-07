import React from 'react';
import './create-schedule.scss';
import ScheduleTable from "../components/schedule-table";
import ScheduleLoadCard from "../components/schedule-load-card";
import ScheduleInformationCard from "../components/schedule-information-card";


class CreateSchedule extends React.Component {

    render() {
        return (
            <div className="cs-wrapper">
                <ScheduleTable/>
                <div className="cs-cards-container">
                    <ScheduleInformationCard className="cs-information-card"/>
                    <ScheduleLoadCard className="cs-load-card"/>
                </div>
            </div>
        );
    }
}

export default CreateSchedule;
