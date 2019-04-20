import React from 'react';
import {connect} from 'react-redux';
import * as PropTypes from "prop-types";
import {Form, Input} from 'antd';

import './login-form.scss';
import Button from '../../../core/components/button/button';

import { logIn, logInData, getErrorFalse } from '../services/actions/actions';

class LogInForm extends React.Component {

    static propTypes = {
        form: PropTypes.node.isRequired,
        onLogIn: PropTypes.func.isRequired,
        sendLogInData: PropTypes.func.isRequired,
        login: PropTypes.bool.isRequired,
        errorFalse: PropTypes.func.isRequired,
    };

    setUsername = (elem) => {
        this.username = elem;
    };

    setPassword = (elem) => {
        this.password = elem;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { form, onLogIn, sendLogInData } = this.props;

        form.validateFields((err) => {
            if (!err) {
                const { errorFalse } = this.props;
                console.log("form ", this);

                onLogIn(this.username.props.value, this.password.props.value);
                sendLogInData('login', this.username.props.value, this.password.props.value);
                errorFalse();
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="wrapper-login-form">
                <Form onSubmit={this.handleSubmit} className="registration-form">

                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{
                                required: true,
                                message: 'Введите, пожалуйста, email!',
                            }],
                        })(
                            <Input
                                ref={this.setUsername}
                                className="custom-input"
                                placeholder="Email"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Введите, пожалуйста, пароль!'}],
                        })(
                            <Input
                                ref={this.setPassword}
                                className="custom-input"
                                placeholder="Пароль"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button text="Авторизоваться" className=""/>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.logInInformation.error,
    };
}

function mapDispatch(dispatch){
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

const WrappedNormalLoginForm = Form.create()(LogInForm);
export default connect(mapStateToProps, mapDispatch)(WrappedNormalLoginForm);
