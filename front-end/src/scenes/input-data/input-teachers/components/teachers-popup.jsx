import React from 'react';
import * as PropTypes from "prop-types";
import {Modal, Input, Select, Form} from 'antd';

import GeneralButton from "../../../../core/components/button/button";

const Option = Select.Option;


class TeacherForm extends React.Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        handleOk: PropTypes.func.isRequired,
        handleCancel: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        daysCount: 1
    };

    handleSubmit(e) {
        e.preventDefault();
        const {form} = this.props;
        form.validateFieldsAndScroll((err) => {
            if (!err) {
                const obj = {
                    name: this.state.name,
                    daysCount: this.state.daysCount
                };
                console.log("obj: ", obj);
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
            daysCount: event,
        });
    };

    getOptions() {
        const MAX_DAYS_COUNT = 7;
        const options = [];
        for (let i = 1; i <= MAX_DAYS_COUNT; i++) {
            options.push(<Option key={i} className="typo" value={i + ''}>{i}</Option>)
        }
        return options;
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal
                    title="Добавить Преподавателя"
                    centered
                    visible={this.props.visible}
                    wrapClassName="schedule-popup"
                    footer={null}
                    onCancel={this.props.handleCancel}
                >
                    <Form className="registration-form">

                        <h3 className="schedule-popup-text">Название</h3>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, название!',
                                }, {
                                    max: 35,
                                    message: 'Длина имя не может быть больше 15 букв!',
                                }, {
                                    pattern: /[а-я]/,
                                    message: 'Имя может содержать только буквы алфавита!',
                                }],
                            })(
                                <Input className="custom-input"
                                       onFocus={this.setTextField}/>
                            )}
                        </Form.Item>

                        <h3 className="schedule-popup-text">Количество дней в неделю</h3>

                        <Form.Item>
                            <Select className="custom-select"
                                    name="daysCount"
                                    defaultValue="1"
                                    onChange={this.setSelectField}
                            >
                                {this.getOptions()}
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

const TeacherPopup = Form.create()(TeacherForm);

export default TeacherPopup;
