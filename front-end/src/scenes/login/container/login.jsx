import React from 'react';

import './login.scss';

import LogInForm from './../components/login-form';
import * as logInReducers from "../service/reducers/reducers";
import {getErrorFalse, logIn, logInData} from "../service/actions/actions";
import connect from "react-redux/es/connect/connect";
import * as PropTypes from "prop-types";

class LogIn extends React.Component {
    static propTypes = {
        error: PropTypes.bool.isRequired,
        onLogIn: PropTypes.func.isRequired,
        sendLogInData: PropTypes.func.isRequired,
        errorFalse: PropTypes.func.isRequired,
    };

    render() {
        const {error, onLogIn, sendLogInData, errorFalse} = this.props;

        return (
            <LogInForm error={error}
                       onLogIn={onLogIn}
                       sendLogInData={sendLogInData}
                       errorFalse={errorFalse}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        error: logInReducers.getUserDataError(state),
    };
}

function mapDispatch(dispatch) {
    return {
        onLogIn: (username, password) => {
            dispatch(logIn(username, password));
        },
        errorFalse: (username, password) => {
            dispatch(getErrorFalse(username, password));
        },
        sendLogInData: (url, user, key) => {
            const data = {
                username: user,
                password: key,
            };
            dispatch(logInData(url, data));
        },
    };
}

export default connect(mapStateToProps, mapDispatch)(LogIn);
