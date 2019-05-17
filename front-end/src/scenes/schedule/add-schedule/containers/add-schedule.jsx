import React from 'react';
import './add-schedule.scss';
import ScheduleTable from '../components/schedule-table';
import ScheduleLoadCard from '../components/schedule-load-card';
import ScheduleInformationCard from '../components/schedule-information-card';
import AddSchedulePopup from '../../all-schedules/components/add-schedule-popup';
import * as PropTypes from 'prop-types';
import * as addScheduleSelectors from '../service/reducers/selectors';
import * as groupsSelectors from '../../../input-data/input-groups/service/reducers/selectors';
import * as subjectsSelectors from '../../../input-data/input-subjects/service/reducers/selectors';
import * as teachersSelectors from '../../../input-data/input-teachers/service/reducers/selectors';
import * as actions from '../service/actions/actions';
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router-dom';


class AddSchedule extends React.Component {

    propTypes = {
        setAddedScheduleName: PropTypes.func.isRequired,
        addWorkLoad: PropTypes.func.isRequired,
        setSelectedLoad: PropTypes.func.isRequired,
        fillScheduleCell: PropTypes.func.isRequired,
        workLoads: PropTypes.array.isRequired,
        subjects: PropTypes.array.isRequired,
        teachers: PropTypes.array.isRequired,
        selectedLoad: PropTypes.object.isRequired,
        schedule: PropTypes.array.isRequired,
        groups: PropTypes.array.isRequired
    };

    state = {
        name: '',
        visible: true
    };

    render() {
        return (
            <div className="cs-wrapper">
                <ScheduleTable schedule={this.props.schedule}
                               fillScheduleCell={this.props.fillScheduleCell}
                               selectedLoad={this.props.selectedLoad}
                               groups={this.props.groups}/>
                <div className="cs-cards-container">
                    <ScheduleInformationCard className="cs-information-card"
                                             selectedLoad={this.props.selectedLoad}/>
                    <ScheduleLoadCard className="cs-load-card"
                                      addWorkLoad={this.props.addWorkLoad}
                                      workLoads={this.props.workLoads}
                                      subjects={this.props.subjects}
                                      teachers={this.props.teachers}
                                      setSelectedLoad={this.props.setSelectedLoad}
                    />
                    <AddSchedulePopup visible={this.state.visible}
                                      parent={this}
                                      setAddedScheduleName={this.props.setAddedScheduleName}
                    />
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        name: addScheduleSelectors.getAddedScheduleName(state),
        workLoads: addScheduleSelectors.getWorkLoads(state),
        subjects: subjectsSelectors.getSubjectNames(state),
        teachers: teachersSelectors.getTeacherFullNames(state),
        selectedLoad: addScheduleSelectors.getSelectedLoad(state),
        schedule: addScheduleSelectors.getAddedSchedule(state),
        groups: groupsSelectors.getGroups(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setAddedScheduleName: (name) => {
            dispatch(actions.setAddedScheduleName(name));
        },
        addWorkLoad: (workLoad) => {
            dispatch(actions.addWorkLoad(workLoad));
        },
        setSelectedLoad: (load) => {
            dispatch(actions.setSelectedLoad(load));
        },
        fillScheduleCell: (data) => {
            dispatch(actions.fillScheduleCell(data));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddSchedule));
