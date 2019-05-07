import React from 'react';
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router-dom';

import "./all-schedules.scss";
import {sendRegistrationData} from "../service/actions/actions";
import * as PropTypes from "prop-types";
import AllSchedulesTable from "../components/all-schedules-table";
import GeneralButton from "../../../../core/components/button/button";
import AddSchedulePopup from '../components/add-schedule-popup';

class AllSchedules extends React.Component {

    static propTypes = {
        sendRegistrationData: PropTypes.func.isRequired,
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

    render() {
        return (
            <div className="schedule-list-wrapper">
                <div className="schedule-list-title">
                    <h3 className="schedule-list-title-text">Все расписания</h3>
                    <GeneralButton text="Добавить расписание" onClick={(e) => this.showModal(e)}/>
                </div>
                <AllSchedulesTable/>
                <AddSchedulePopup visible={this.state.visible}
                                  handleOk={this.handleOk}
                                  handleCancel={this.handleCancel}/>
            </div>
        );
    }
}

function mapDispatch(dispatch) {
    return {
        sendRegistrationData: (user) => {
            dispatch(sendRegistrationData(user));
        },
    };
}

export default withRouter(connect(null, mapDispatch)(AllSchedules));
