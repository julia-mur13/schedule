import React from 'react';
import { Button, Card, Input, message, Select } from 'antd';
import './input-classrooms.scss';
import ClassroomCard from '../components/classroom-card';
import connect from 'react-redux/es/connect/connect';
import * as classroomsReducers from '../service/reducers/selectors';
import { addClassroom } from '../service/actions/actions';
import * as PropTypes from 'prop-types';

const Option = Select.Option;

class InputClassrooms extends React.Component {

    static propTypes = {
        addClassroom: PropTypes.func.isRequired,
        classrooms: PropTypes.array.isRequired,
    };

    state = {
        isClickedAdd: false,
        clickEditBtn: null,
        number: null,
        type: 'Практическая'
    };

    editClassroom(event) {
        if (this.isClickedAdd) {
            message.error('Добавьте аудиторию');
        } else {
            event.target.setAttribute('edit', '');
            this.setState({clickEditBtn: event.target});
        }
    }

    getClassroomCards() {
        return this.props.classrooms.map((el, index) => <ClassroomCard roomNumber={el.number} type={el.type}
                                                                       number={index} key={index}
                                                                       isClickedAdd={this.state.isClickedAdd}
                                                                       clickEditBtn={this.state.clickEditBtn}
                                                                       editClassroom={(e) => this.editClassroom(e)}
                                                                       finishEditClassroom={(e) => this.finishEditClassroom(e)}
        />);
    }

    addClassroomForm() {
        this.setState({
            isClickedAdd: true
        });
    }

    addClassroom = () => {
        this.props.addClassroom({
            number: this.state.number,
            type: this.state.type
        });
        this.setState({
            isClickedAdd: false
        });
    };

    setTextField = (event) => {
        const field = event.target.getAttribute('field');
        const value = event.target.value;
        this.setState({
            [field]: value || '',
        });
    };

    setSelectField = (event) => {
        event = event.toLowerCase();
        let type = '';
        switch (event) {
            case 'lecture':
                type = 'Лекционная';
                break;
            case 'practical':
                type = 'Практическая';
                break;
            case 'laboratory':
                type = 'Лабораторная';
                break;
            case 'gym':
                type = 'Спортивный зал';
                break;
            default:
                break;
        }
        console.log('event', event);
        this.setState({
            type: type,
        });
    };

    renderAddCard() {
        if (this.state.isClickedAdd) {
            return (
                <div className="classroom-add-card">
                    <Input className="custom-input classroom-number-input"
                           field="number"
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
                    <Button onClick={(e) => this.addClassroom(e)}
                            className="classroom-ok-btn general-button">OK</Button>
                </div>
            );
        }
        return (<Button className="classroom-add-btn" type="dashed" shape="circle" icon="plus"
                        onClick={this.addClassroomForm.bind(this)}/>);
    }

    render() {
        const addClass = (this.state.isClickedAdd || this.state.clickEditBtn) ? 'big-card' : '';
        return (
            <div>
                {/*<Search*/}
                    {/*placeholder="Введите номер или тип аудитории"*/}
                    {/*onSearch={value => console.log(value)}*/}
                    {/*style={{width: 350}}*/}
                {/*/>*/}
                <div className="classrooms-grid">
                    <Card className={'classroom-card add-classroom-card ' + addClass}>
                        {this.renderAddCard()}
                    </Card>
                    {this.getClassroomCards()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        classrooms: classroomsReducers.getClassrooms(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addClassroom: (classroom) => {
            dispatch(addClassroom(classroom));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputClassrooms);
