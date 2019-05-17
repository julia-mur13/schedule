import React from 'react';
import * as PropTypes from 'prop-types';
import { Modal, Input, Select, Form } from 'antd';

import './schedule-load-popup.scss';
import GeneralButton from '../../../../core/components/button/button';
import '../../../../core/components/custom-popup/custom-popup.scss';
import '../../../../core/components/custom-search-select/custom-search-select.scss';

const Option = Select.Option;


class ScheduleLoadForm extends React.Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        handleOk: PropTypes.func.isRequired,
        handleCancel: PropTypes.func.isRequired,
        addWorkLoad: PropTypes.func.isRequired,
        teachers: PropTypes.array.isRequired,
        subjects: PropTypes.array.isRequired
    };

    state = {
        classroomType: 'Практическая',
        teacher: '',
        subject: '',
        lessonsCount: 1
    };

    handleSubmit(e) {
        e.preventDefault();
        const {form, addWorkLoad} = this.props;
        form.validateFieldsAndScroll((err) => {
            if (!err) {
                const obj = {
                    classroomType: this.state.classroomType,
                    teacher: this.state.teacher,
                    subject: this.state.subject,
                    lessonsCount: this.state.lessonsCount
                };
                addWorkLoad(obj);
                this.props.handleOk();
            }
        });
    }

    setTextField = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        this.setState({
            [field]: value || '',
        });
    };

    setSelectField = (event) => {
        this.setState({
            classroomType: event,
        });
    };

    setSelectSubject = (value) => {
        this.setState({
            subject: value,
        });
    };

    setSelectTeacher = (value) => {
        this.setState({
            teacher: value,
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
                    wrapClassName="custom-popup"
                    footer={null}
                    onCancel={this.props.handleCancel}
                >
                    <Form className="schedule-load-form">

                        <h3 className="custom-popup-text">Предмет</h3>

                        <Form.Item>
                            {getFieldDecorator('subject', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, название предмета!',
                                }, {
                                    max: 15,
                                    message: 'Длина предмета не может быть больше 15 букв!',
                                }],
                            })(
                                <Select
                                    showSearch
                                    className="custom-search-select"
                                    placeholder="Выберите предмет"
                                    optionFilterProp="children"
                                    onBlur={this.setSelectSubject}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    {this.props.subjects.map((el) => (<Option value={el}>{el}</Option>))}
                                </Select>
                            )}
                        </Form.Item>

                        <h3 className="custom-popup-text">Преподаватель</h3>

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
                                <Select
                                    showSearch
                                    className="custom-search-select"
                                    placeholder="Выберите преподавателя"
                                    optionFilterProp="children"
                                    onBlur={this.setSelectTeacher}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    {this.props.teachers.map((el) => (<Option value={el}>{el}</Option>))}
                                </Select>
                            )}
                        </Form.Item>

                        <h3 className="custom-popup-text">Количество занятий</h3>

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

                        <h3 className="custom-popup-text">Тип аудитории</h3>

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

                    <div className="popup-btns-wrapper">
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
