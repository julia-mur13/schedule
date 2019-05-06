import React from 'react';
import * as PropTypes from "prop-types";
import {Layout} from 'antd';
import HorizontalMenu from "../horizontal-menu/horizontal-menu";
import './custom-header.scss';
import logo from './logo5.png';

const {Header} = Layout;

class CustomHeader extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    renderLinks() {
        return (
            <div className="main-header-nav">
                <HorizontalMenu user={this.props.user} activeLocation={window.location.pathname.slice(1)}/>
            </div>
        );
    }

    render() {
        return (
            <Header className="main-header">
                    <div className="header-logo">
                        <img className="header-logo-img" src={logo} />
                        <p className="header-logo-text">SCHEDULE BOARD</p>
                    </div>
                    {this.renderLinks()}
            </Header>
        );
    }
}

export default CustomHeader;
