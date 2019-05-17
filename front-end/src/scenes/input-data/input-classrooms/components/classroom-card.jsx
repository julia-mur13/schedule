import React from 'react';
import * as PropTypes from "prop-types";
import {Card, Button, Input, Select, message} from 'antd';
import './classroom-card.scss';

const Option = Select.Option;

class ClassroomCard extends React.Component {


    static propTypes = {
        type: PropTypes.string.isRequired,
        isClickedAdd: PropTypes.bool.isRequired,
        editClassroom: PropTypes.func.isRequired,
        number: PropTypes.number.isRequired
    };

    getTypeClassName() {
        let className = '';
        switch (this.props.type) {
            case 'Лекционная':
                className = 'lecture';
                break;
            case 'Практическая':
                className = 'practical';
                break;
            case 'Лабораторная':
                className = 'laboratory';
                break;
            case 'Спортивный зал':
                className = 'gym';
                break;
            default:
                break;
        }
        return className;
    }

    validateField() {
        if (!this.props.number) {
            message.error('Регистрация не произошла');
            return false;
        }
        return true;
    }

    finishEditClassroom() {
        this.validateField();
    }


    renderEditClassroom() {
        const target = this.props.clickEditBtn;
        if (target && +target.closest(".classroom-card").getAttribute('number') === this.props.number) {
            const card = target.closest(".classroom-card");
            return (
                <div className="classroom-add-card">
                    <Input className="custom-input classroom-number-input"
                           placeholder={card.querySelector('.classroom-number').innerHTML}
                           onBlur={this.setTextField}
                    />
                    <Select className="custom-select classroom-type-select"
                            name="type"
                            defaultValue={card.querySelector('.classroom-type').innerHTML}
                            onChange={this.setSelectField}
                    >
                        <Option value="Practical">Практическая</Option>
                        <Option value="Lecture">Лекционная</Option>
                        <Option value="Laboratory">Лабораторная</Option>
                        <Option value="Gym">Спортивный зал</Option>
                    </Select>
                    <Button className="classroom-ok-btn general-button" onClick={this.finishEditClassroom}>OK</Button>
                </div>);
        }

        const {roomNumber, type} = this.props;

        return (
            <div className="classroom-card-body">
                <div>
                    <h3 className="classroom-number">{roomNumber}</h3>
                    <p className="classroom-type">{type}</p>
                </div>
                <Button className="card-edit-btn " shape="circle" icon="edit"
                        onClick={this.props.editClassroom.bind(this.props)}
                />
            </div>);
    }

    render() {
        const addClass = (this.props.isClickedAdd || this.props.clickEditBtn) ? "big-card" : "";
        return (
            <Card number={this.props.number} className={"classroom-card " + this.getTypeClassName() + " " + addClass}>
                {this.renderEditClassroom()}
            </Card>
        );
    }
}

export default ClassroomCard;
