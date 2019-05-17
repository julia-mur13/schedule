import React from 'react';
import GroupsList from '../components/groups-list';
import GeneralButton from '../../../../core/components/button/button';
import GroupPopup from '../components/group-popup';
import connect from 'react-redux/es/connect/connect';
import { addGroup } from '../service/actions/actions';
import * as groupReducers from '../service/reducers/selectors';
import * as PropTypes from 'prop-types';

class InputGroups extends React.Component {

    static propTypes = {
        addGroup: PropTypes.func.isRequired,
        groups: PropTypes.array.isRequired,
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
                    <GeneralButton text="Добавить группу" onClick={(e) => this.showModal(e)}/>
                </div>
                <GroupsList groups={this.props.groups}/>
                <GroupPopup visible={this.state.visible}
                              handleOk={this.handleOk}
                              handleCancel={this.handleCancel}
                              addGroup={this.props.addGroup}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        groups: groupReducers.getGroups(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addGroup: (group) => {
            dispatch(addGroup(group));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputGroups);
