import React from 'react';
import TeachersList from '../components/teachers-list';
import GeneralButton from '../../../../core/components/button/button';
import TeachersPopup from '../components/teacher-popup';
import connect from 'react-redux/es/connect/connect';
import { addTeacher } from '../service/actions/actions';
import * as teachersReducers from '../service/reducers/selectors';
import * as PropTypes from 'prop-types';

class InputTeachers extends React.Component {

    static propTypes = {
        addTeacher: PropTypes.func.isRequired,
        teachers: PropTypes.array.isRequired,
    };

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
                <TeachersList teachers={this.props.teachers}/>
                <TeachersPopup visible={this.state.visible}
                               handleOk={this.handleOk}
                               handleCancel={this.handleCancel}
                               addTeacher={this.props.addTeacher}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        teachers: teachersReducers.getTeachers(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTeacher: (teacher) => {
            dispatch(addTeacher(teacher));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTeachers);
