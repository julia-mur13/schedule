import React from 'react';
import SubjectsList from '../components/subjects-list';
import GeneralButton from '../../../../core/components/button/button';
import SubjectPopup from '../components/subject-popup';
import connect from 'react-redux/es/connect/connect';
import { addSubject } from '../service/actions/actions';
import * as subjectReducers from '../service/reducers/selectors';
import * as PropTypes from 'prop-types';

class InputSubjects extends React.Component {

    static propTypes = {
        addSubject: PropTypes.func.isRequired,
        subjects: PropTypes.array.isRequired,
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
                    <GeneralButton text="Добавить дисциплину" onClick={(e) => this.showModal(e)}/>
                </div>
                <SubjectsList subjects={this.props.subjects}/>
                <SubjectPopup visible={this.state.visible}
                              handleOk={this.handleOk}
                              handleCancel={this.handleCancel}
                              addSubject={this.props.addSubject}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        subjects: subjectReducers.getSubjects(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addSubject: (subject) => {
            dispatch(addSubject(subject));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSubjects);
