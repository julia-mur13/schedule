import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router-dom';

import './all-schedules.scss';
import * as PropTypes from 'prop-types';
import AllSchedulesTable from '../components/all-schedules-table';
import GeneralButton from '../../../../core/components/button/button';
import AddSchedulePopup from '../components/add-schedule-popup';
import { sendRegistrationData } from '../../../registration/service/actions/actions';
import * as addScheduleReducers from '../../add-schedule/service/reducers/selectors';
import { setAddedScheduleName } from '../../add-schedule/service/actions/actions';

class AllSchedules extends React.Component {

    static propTypes = {
        setAddedScheduleName: PropTypes.func.isRequired
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

    render() {
        return (
            <div className="schedule-list-wrapper">
                <div className="schedule-list-title">
                    <h3 className="schedule-list-title-text">Все расписания</h3>
                    <GeneralButton text="Добавить расписание" onClick={(e) => this.showModal(e)}/>
                </div>
                <AllSchedulesTable/>
                <AddSchedulePopup visible={this.state.visible}
                                  setAddedScheduleName={() => this.props.setAddedScheduleName()}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        name: addScheduleReducers.getAddedScheduleName(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setAddedScheduleName: (name) => {
            dispatch(setAddedScheduleName(name));
        },
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllSchedules));
