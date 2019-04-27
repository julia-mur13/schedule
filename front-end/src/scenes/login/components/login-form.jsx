import React from 'react';
import * as PropTypes from "prop-types";
import {Form, Input} from 'antd';

import './login-form.scss';
import Button from '../../../core/components/button/button';

class LogInForm extends React.Component {

    static propTypes = {
        form: PropTypes.object.isRequired,
        error: PropTypes.bool.isRequired,
        onLogIn: PropTypes.func.isRequired,
        sendLogInData: PropTypes.func.isRequired,
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
        const {form, onLogIn, sendLogInData, errorFalse} = this.props;

        form.validateFields((err) => {
            if (!err) {
                onLogIn(this.username.props.value, this.password.props.value);
                sendLogInData('login', this.username.props.value, this.password.props.value);
                errorFalse();
            }
        });
    };

    render() {
        const {form} = this.props;
        const {getFieldDecorator} = form;


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
                        <Button text="Авторизоваться" className="login-submit-btn"/>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(LogInForm);
export default WrappedNormalLoginForm;
