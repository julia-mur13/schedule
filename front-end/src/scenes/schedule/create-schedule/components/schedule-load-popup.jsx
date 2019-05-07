import React from 'react';
import * as PropTypes from "prop-types";
import {Modal, Input, Select, Form} from 'antd';

import './schedule-load-popup.scss';
import GeneralButton from "../../../../core/components/button/button";

const Option = Select.Option;


class ScheduleLoadForm extends React.Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        handleOk: PropTypes.func.isRequired,
        handleCancel: PropTypes.func.isRequired,
    };

    state = {
        classroomType: 'Практическая',
        teacher: '',
        subject: '',
        lessonsCount: 1
    };

    handleSubmit(e) {
        e.preventDefault();
        const {form} = this.props;
        form.validateFieldsAndScroll((err) => {
            if (!err) {
                const obj = {
                    classroomType: this.state.classroomType,
                    teacher: this.state.teacher,
                    subject: this.state.subject,
                    lessonsCount: this.state.lessonsCount
                };
                console.log("obj: ", obj);
                this.props.handleOk();
            }
        });
    }

    setTextField = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        console.log("event.target: ", event.target);
        this.setState({
            [field]: value || '',
        });
    };

    setSelectField = (event) => {
        this.setState({
            daysCount: event,
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal
                    title="Добавить Нагрузку"
                    centered
                    visible={this.props.visible}
                    wrapClassName="add-schedule-popup"
                    footer={null}
                    onCancel={this.props.handleCancel}
                >
                    <Form className="schedule-load-form">

                        <h3 className="schedule-popup-text">Предмет</h3>

                        <Form.Item>
                            {getFieldDecorator('subject', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, назание предмета!',
                                }, {
                                    max: 15,
                                    message: 'Длина имя не может быть больше 15 букв!',
                                }],
                            })(
                                <Input className="custom-input"
                                       placeholder="Название предмета"
                                       onBlur={this.setTextField}/>
                            )}
                        </Form.Item>

                        <h3 className="schedule-popup-text">Преподаватель</h3>

                        <Form.Item>
                            {getFieldDecorator('teacher', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, имя преподавателя!',
                                }, {
                                    max: 15,
                                    message: 'Длина имя не может быть больше 15 букв!',
                                }],
                            })(
                                <Input className="custom-input"
                                       placeholder="Имя преподавателя"
                                       onBlur={this.setTextField}/>
                            )}
                        </Form.Item>

                        <h3 className="schedule-popup-text">Количество занятий</h3>

                        <Form.Item>
                            {getFieldDecorator('lessonsCount', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, количество занятий!',
                                }, {
                                    pattern: /[1-9]/,
                                    message: 'Введите, пожалуйста, натуральное число!',
                                }],
                            })(
                                <Input className="custom-input"
                                       placeholder="Количество занятий"
                                       onBlur={this.setTextField}/>
                            )}
                        </Form.Item>

                        <h3 className="schedule-popup-text">Тип аудитории</h3>

                        <Form.Item>
                            <Select className="custom-select"
                                    name="classroomType"
                                    defaultValue="Практическая"
                                    onBlur={this.setSelectField}
                            >
                                <Option value="Practical">Практическая</Option>
                                <Option value="Lecture">Лекционная</Option>
                                <Option value="Laboratory">Лабораторная</Option>
                                <Option value="Gym">Спортивный зал</Option>
                            </Select>
                        </Form.Item>
                    </Form>

                    <div className="schedule-btns-wrapper">
                        <GeneralButton text="Добавить" className="add-schedule-btn"
                                       onClick={(e) => this.handleSubmit(e)}/>
                    </div>

                </Modal>
            </div>
        );
    }
}

const ScheduleLoadPopup = Form.create()(ScheduleLoadForm);

export default ScheduleLoadPopup;
