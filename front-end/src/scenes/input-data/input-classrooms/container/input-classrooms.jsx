import React from 'react';
import ClassroomCard from "../components/classroom-card";
import './input-classrooms.scss';
import {Button, Card, Input, message, Select} from "antd";

const Option = Select.Option;

class InputClassrooms extends React.Component {

    state = {
        clickAddBtn: false,
        clickEditBtn: null
    };

    editClassroom(event) {
        console.log(111);
        if (this.clickAddBtn) {
            message.error('Регистрация не произошла');
        } else {
            event.target.setAttribute('edit', '');
            this.setState({clickEditBtn: event.target});
        }
    }

    getClassroomCards() {
        const arr = [
            {number: 235, type: "Практическая"},
            {number: 607, type: "Лекционная"},
            {number: 518, type: "Практическая"},
            {number: 506, type: "Лабораторная"},
            {number: 521, type: "Практическая"},
            {number: null, type: "Спортивный зал"},
            {number: 235, type: "Практическая"},
            {number: 235, type: "Практическая"},
            {number: 235, type: "Практическая"}];
        return arr.map((el, index) => <ClassroomCard roomNumber={el.number} type={el.type} number={index} key={index}
                                                     clickAddBtn={this.state.clickAddBtn}
                                                     clickEditBtn={this.state.clickEditBtn}
                                                     editClassroom={(e) => this.editClassroom(e)}
                                                     finishEditClassroom={(e) => this.finishEditClassroom(e)}
        />)
    }

    addClassroom() {
        this.setState({
            clickAddBtn: true
        })
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
            role: event,
        });
    };

    renderAddCard() {
        if (this.state.clickAddBtn) {
            return (
                <div className="classroom-add-card">
                    <Input className="custom-input classroom-number-input"
                           placeholder="Номер аудитории"
                           onBlur={this.setTextField}
                    />
                    <Select className="custom-select classroom-type-select"
                            name="type"
                            defaultValue="Практическая"
                            onChange={this.setSelectField}
                    >
                        <Option value="Practical">Практическая</Option>
                        <Option value="Lecture">Лекционная</Option>
                        <Option value="Laboratory">Лабораторная</Option>
                        <Option value="Gym">Спортивный зал</Option>
                    </Select>
                    <Button className="classroom-ok-btn general-button">OK</Button>
                </div>
            );
        }
        return (<Button className="classroom-add-btn" type="dashed" shape="circle" icon="plus"
                        onClick={this.addClassroom.bind(this)}/>);
    }

    render() {
        const addClass = (this.state.clickAddBtn || this.state.clickEditBtn) ? "big-card" : "";
        return (
            <div className="classrooms-grid">
                <Card className={"classroom-card add-classroom-card " + addClass}>
                    {this.renderAddCard()}
                </Card>
                {this.getClassroomCards()}
            </div>
        );
    }
}

export default InputClassrooms;
