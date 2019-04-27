import React from 'react';
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router-dom';

import "./all-schedules-page.scss";
import {sendRegistrationData} from "../services/actions/actions";
import * as PropTypes from "prop-types";

class AllSchedulesPage extends React.Component {

    static propTypes = {
        sendRegistrationData: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div>
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

export default withRouter(connect(null, mapDispatch)(AllSchedulesPage));
