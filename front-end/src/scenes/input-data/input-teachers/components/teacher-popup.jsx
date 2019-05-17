import React from 'react';
import * as PropTypes from 'prop-types';
import { Modal, Input, Select, Form } from 'antd';
import '../../../../core/components/custom-popup/custom-popup.scss';

import GeneralButton from '../../../../core/components/button/button';

const Option = Select.Option;


class TeacherForm extends React.Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        handleOk: PropTypes.func.isRequired,
        handleCancel: PropTypes.func.isRequired,
        addTeacher: PropTypes.func.isRequired
    };

    state = {
        lastName: '',
        firstName: '',
        middleName: '',
        subjects: [],
        groups: []
    };

    handleSubmit(e) {
        e.preventDefault();
        const {form} = this.props;
        form.validateFieldsAndScroll((err) => {
            if (!err) {
                this.props.addTeacher({
                    lastName: this.state.lastName,
                    firstName: this.state.firstName,
                    middleName: this.state.middleName,
                    subjects: this.state.subjects,
                    groups: this.state.groups
                });
            }
        });
        this.props.handleOk();
    }

    setTextField = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        console.log(value);
        this.setState({
            [field]: value || '',
        });
    };

    setSelectGroups = (event) => {
        this.setState({
            groups: event,
        });
    };

    setSelectSubjects = (event) => {
        this.setState({
            subjects: event,
        });
    };

    getOptions() {
        const MAX_DAYS_COUNT = 7;
        const options = [];
        for (let i = 1; i <= MAX_DAYS_COUNT; i++) {
            options.push(<Option key={i} className="typo" value={i + ''}>{i}</Option>);
        }
        return options;
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div>
                <Modal
                    title="Добавить Преподавателя"
                    centered
                    visible={this.props.visible}
                    wrapClassName="teacher-popup custom-popup"
                    footer={null}
                    onCancel={this.props.handleCancel}
                >
                    <Form className="registration-form">

                        <h3 className="custom-popup-text">Фамилия</h3>
                        <Form.Item>
                            {getFieldDecorator('lastName', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, фамилию преподавателя!',
                                }, {
                                    max: 35,
                                    message: 'Длина фамилии не может быть больше 35 букв!',
                                }, {
                                    pattern: /[а-я]/,
                                    message: 'Имя может содержать только буквы алфавита!',
                                }],
                            })(
                                <Input className="custom-input"
                                       onBlur={this.setTextField}/>
                            )}
                        </Form.Item>

                        <h3 className="custom-popup-text">Имя</h3>
                        <Form.Item>
                            {getFieldDecorator('firstName', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, имя преподавателя!',
                                }, {
                                    max: 35,
                                    message: 'Длина имя не может быть больше 35 букв!',
                                }, {
                                    pattern: /[а-я]/,
                                    message: 'Имя может содержать только буквы алфавита!',
                                }],
                            })(
                                <Input className="custom-input"
                                       onBlur={this.setTextField}/>
                            )}
                        </Form.Item>

                        <h3 className="custom-popup-text">Отчество</h3>
                        <Form.Item>
                            {getFieldDecorator('middleName', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, отчество преподавателя!',
                                }, {
                                    max: 35,
                                    message: 'Длина отчества не может быть больше 35 букв!',
                                }, {
                                    pattern: /[а-я]/,
                                    message: 'Отчество может содержать только буквы алфавита!',
                                }],
                            })(
                                <Input className="custom-input"
                                       onBlur={this.setTextField}/>
                            )}
                        </Form.Item>

                        <h3 className="custom-popup-text">Дисциплины</h3>

                        <Form.Item>
                            <Select
                                className="custom-select"
                                mode="tags"
                                size="default"
                                placeholder="Please select"
                                defaultValue={[]}
                                onChange={this.setSelectSubjects}
                            >
                                {children}
                            </Select>
                        </Form.Item>

                        <h3 className="custom-popup-text">Группы</h3>

                        <Form.Item>
                            <Select
                                className="custom-select"
                                mode="tags"
                                size="default"
                                placeholder="Please select"
                                defaultValue={[]}
                                onChange={this.setSelectGroups}
                            >
                                {children}
                            </Select>
                        </Form.Item>
                    </Form>

                    <div className="popup-btns-wrapper">
                        <GeneralButton text="Добавить" className="add-teacher-btn"
                                       onClick={(e) => this.handleSubmit(e)}/>
                    </div>

                </Modal>
            </div>
        );
    }
}

const TeacherPopup = Form.create()(TeacherForm);

export default TeacherPopup;
