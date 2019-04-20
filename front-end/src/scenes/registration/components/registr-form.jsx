import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import "./registr-form.scss";

import {Form, Select, Input} from 'antd';
import Button from '../../../core/components/button/button';

const Option = Select.Option;


class RegistrationForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="wrapper-registration-form">
                <Form onSubmit={this.handleSubmit} className="registration-form">

                    <Form.Item>
                        {getFieldDecorator('firstName', {
                            rules: [{
                                required: true,
                                message: 'Введите, пожалуйста, имя!',
                            }, {
                                max: 15,
                                message: 'Длина имя не может быть больше 15 букв!',
                            }, {
                                pattern: /[а-я]/,
                                message: 'Имя может содержать только буквы алфавита!',
                            }],
                        })(
                            <Input className="custom-input" placeholder="Имя"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('middleName', {
                            rules: [{
                                required: true,
                                message: 'Введите, пожалуйста, отчество!',
                            }, {
                                max: 15,
                                message: 'Длина отчества не может быть больше 15 букв!',
                            }, {
                                pattern: /[а-я]/,
                                message: 'Отчество может содержать только буквы алфавита!',
                            }],
                        })(
                            <Input className="custom-input" placeholder="Отчество"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('lastName', {
                            rules: [{
                                required: true,
                                message: 'Введите, пожалуйста, фамилию!',
                            }, {
                                max: 15,
                                message: 'Длина фамилии не может быть больше 15 букв!',
                            }, {
                                pattern: /[а-я]/,
                                message: 'Фамилия может содержать только буквы алфавита!',
                            }],
                        })(
                            <Input className="custom-input" placeholder="Фамилия"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{
                                required: true,
                                message: 'Введите, пожалуйста, email!',
                            }],
                        })(
                            <Input className="custom-input" placeholder="Email"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Введите, пожалуйста, пароль!'}],
                        })(
                            <Input className="custom-input" placeholder="Пароль"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Select className="custom-select" defaultValue="Студент">
                            <Option value="Student">Студент</Option>
                            <Option value="Teacher">Преподаватель</Option>
                            <Option value="Manager">Диспетчер</Option>
                            <Option value="Admin">Администратор</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button text="Зарегистироваться"/>
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

const WrapperRegistrationForm = Form.create()(RegistrationForm);
export default withRouter(connect(mapStateToProps, mapDispatch)(WrapperRegistrationForm));
