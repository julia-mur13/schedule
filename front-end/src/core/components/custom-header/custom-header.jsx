import React from 'react';
import * as PropTypes from 'prop-types';
import { Layout } from 'antd';
import HorizontalMenu from '../horizontal-menu/horizontal-menu';
import './custom-header.scss';
import logo from './logo.png';

const {Header} = Layout;

class CustomHeader extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object.isRequired,
        addedScheduleName: PropTypes.string.isRequired
    };

    renderLinks() {
        return (
            <div className="main-header-nav">
                <HorizontalMenu user={this.props.user} activeLocation={window.location.pathname.slice(1)}/>
            </div>
        );
    }

    render() {
        const {addedScheduleName} = this.props;
        return (
            <Header className="main-header">
                <div className="header-logo">
                    <img className="header-logo-img" src={logo}/>
                    <p className="header-logo-text">SCHEDULE BOARD</p>
                </div>
                {(addedScheduleName) ? <div className="add-schedule-name">{addedScheduleName}</div> : null}
                {this.renderLinks()}
            </Header>
        );
    }
}

export default CustomHeader;
