import React from 'react';
import * as PropTypes from 'prop-types';
import { Modal, Input, Select, Form } from 'antd';

import './add-schedule-popup.scss';
import '../../../../core/components/custom-popup/custom-popup.scss';
import GeneralButton from '../../../../core/components/button/button';

const Option = Select.Option;

class AddScheduleForm extends React.Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        setAddedScheduleName: PropTypes.func.isRequired
    };

    state = {
        name: '',
    };

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

    handleCancel = () => {
        const {form} = this.props;
        form.validateFieldsAndScroll((err) => {
            if (!err) {
                this.props.parent.setState({
                    visible: false,
                });
            }
        });
    };

    handleOk = () => {
        const {form} = this.props;
        form.validateFieldsAndScroll((err) => {
            if (!err) {
                this.props.parent.setState({
                    visible: false,
                    name: this.state.name
                });
                this.props.setAddedScheduleName(this.state.name);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal
                    title="Добавить Расписание"
                    centered
                    visible={this.props.visible}
                    wrapClassName="add-schedule-popup custom-popup"
                    footer={null}
                    onCancel={this.handleCancel}

                >
                    <Form className="add-schedule-form">

                        <h3 className="custom-popup-text">Название</h3>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true,
                                    message: 'Введите, пожалуйста, название!',
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
                    </Form>

                    <div className="schedule-btns-wrapper popup-btns-wrapper">
                        <GeneralButton text="Добавить" className="add-schedule-btn"
                                       onClick={(e) => this.handleOk(e)}/>
                    </div>

                </Modal>
            </div>
        );
    }
}

const AddSchedulePopup = Form.create()(AddScheduleForm);

export default AddSchedulePopup;
