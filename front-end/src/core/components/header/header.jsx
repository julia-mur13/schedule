import React from 'react';
import {Link} from 'react-router-dom';
import * as PropTypes from "prop-types";

import './header.scss';
import connect from "react-redux/es/connect/connect";

import HorizontalMenu from "../horizontal-menu/horizontal-menu";

class Header extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    renderLinks() {
        const {user} = this.props;
        if(user.role === 'GUEST') {
            return (
                <div className="main-header-nav">
                    <Link className="header-link" to="/login">Авторизация</Link>
                    <Link className="header-link" to="/registration">Регистрация</Link>
                </div>
            );
        }
        return (
            <div className="main-header-nav">
                <HorizontalMenu/>
            </div>
        );
    }

    render() {
        return (
            <header className="main-header">
                <div className="header-logo">LOGO</div>
                {this.renderLinks()}
            </header>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.logInInformation.user,
    };
}

export default connect(mapStateToProps)(Header);
