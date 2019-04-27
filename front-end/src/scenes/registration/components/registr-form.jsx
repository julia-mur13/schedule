import React from 'react';

import "./registr-form.scss";

import {Form, Select, Input} from 'antd';
import Button from '../../../core/components/button/button';
import * as PropTypes from "prop-types";

const Option = Select.Option;


class RegistrationForm extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    state = {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'Student',
    };

    setTextField = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        this.setState({
            [field]: value || '',
        });
    };

    setRoleField= (event) => {
        this.setState({
            role: event,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {form, onClick} = this.props;
        form.validateFieldsAndScroll((err) => {
            console.log(onClick);
            if (!err) {
                onClick({
                    firstName: this.state.firstName,
                    middleName: this.state.middleName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    role: this.state.role,
                });
            }
        });
    };

    render() {
        const {form} = this.props;
        const {getFieldDecorator} = form;

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
                            <Input className="custom-input"
                                   placeholder="Имя"
                                   onBlur={this.setTextField}
                            />
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
                            <Input className="custom-input"
                                   placeholder="Отчество"
                                   onBlur={this.setTextField}
                            />
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
                            <Input className="custom-input"
                                   placeholder="Фамилия"
                                   onBlur={this.setTextField}
                            />
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{
                                required: true,
                                message: 'Введите, пожалуйста, email!',
                            }],
                        })(
                            <Input className="custom-input"
                                   placeholder="Email"
                                   onBlur={this.setTextField}
                            />
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Введите, пожалуйста, пароль!'}],
                        })(
                            <Input className="custom-input"
                                   placeholder="Пароль"
                                   onBlur={this.setTextField}
                            />
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Select className="custom-select"
                                name="role"
                                defaultValue="Студент"
                                onChange={this.setRoleField}
                        >
                            <Option value="Student">Студент</Option>
                            <Option value="Teacher">Преподаватель</Option>
                            <Option value="Manager">Диспетчер</Option>
                            <Option value="Admin">Администратор</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button className=""
                                onClick={this.handleSubmit}
                                text="Зарегистироваться"
                        />
                    </Form.Item>

                </Form>
            </div>
        );
    }
}


const WrapperRegistrationForm = Form.create()(RegistrationForm);
export default WrapperRegistrationForm;
