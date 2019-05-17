import React from 'react';
import * as PropTypes from 'prop-types';
import { Modal, Input, Select, Form } from 'antd';
import './group-popup.scss';

import GeneralButton from '../../../../core/components/button/button';

const Option = Select.Option;


class TeacherForm extends React.Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        handleOk: PropTypes.func.isRequired,
        handleCancel: PropTypes.func.isRequired,
        addGroup: PropTypes.func.isRequired
    };

    state = {
        name: ''
    };

    handleSubmit(e) {
        e.preventDefault();
        const {form} = this.props;
        form.validateFieldsAndScroll((err) => {
            if (!err) {
                this.props.addGroup({
                    name: this.state.name
                });
            }
        });
        this.props.handleOk();
    }

    setTextField = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        this.setState({
            [field]: value || '',
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal
                    title="Добавить Дисциплину"
                    centered
                    visible={this.props.visible}
                    wrapClassName="сustom-popup"
                    footer={null}
                    onCancel={this.props.handleCancel}
                >
                    <Form>

                        <h3 className="custom-popup-text">Название</h3>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, название!',
                                }, {
                                    max: 35,
                                    message: 'Длина названия не может быть больше 35 букв!',
                                }, {
                                    pattern: /[а-я]/,
                                    message: 'Название может содержать только буквы алфавита!',
                                }],
                            })(
                                <Input className="custom-input"
                                       placeholder="Название"
                                       onBlur={this.setTextField}/>
                            )}
                        </Form.Item>

                    </Form>

                    <div className="teacher-btns-wrapper">
                        <GeneralButton text="Добавить" className="add-teacher-btn"
                                       onClick={(e) => this.handleSubmit(e)}/>
                    </div>

                </Modal>
            </div>
        );
    }
}

const GroupPopup = Form.create()(TeacherForm);

export default GroupPopup;
