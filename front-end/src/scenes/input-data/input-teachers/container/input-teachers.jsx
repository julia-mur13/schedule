import React from 'react';
import TeachersList from "../components/teachers-list";
import GeneralButton from "../../../../core/components/button/button";
import TeachersPopup from '../components/teachers-popup';

class InputTeachers extends React.Component {

    state = {
        visible: false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div className="schedule-list-wrapper">
                <div className="schedule-list-title">
                    <h3 className="schedule-list-title-text">Преподаватели</h3>
                    <GeneralButton text="Добавить преподавателя" onClick={(e) => this.showModal(e)}/>
                </div>
                <TeachersList/>
                <TeachersPopup visible={this.state.visible}
                               handleOk={this.handleOk}
                               handleCancel={this.handleCancel}/>
            </div>
        );
    }
}

export default InputTeachers;
