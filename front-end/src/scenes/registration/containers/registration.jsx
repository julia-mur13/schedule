import React from 'react';
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router-dom';
import RegistrationForm from '../components/registr-form';

import "./registration.scss";
import {sendRegistrationData} from "../services/actions/actions";
import * as PropTypes from "prop-types";

class Registration extends React.Component {

    static propTypes = {
        sendRegistrationData: PropTypes.func.isRequired,
    };

    render() {
        const {sendRegistrationData} = this.props;
        return (
            <div className="main-registration-wrapper">
                <div className="main-content">
                    <RegistrationForm onClick={sendRegistrationData}/>
                </div>
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

export default withRouter(connect(null, mapDispatch)(Registration));
