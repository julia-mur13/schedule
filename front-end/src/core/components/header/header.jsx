import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import * as PropTypes from "prop-types";

import './header.scss';

class Header extends React.PureComponent {
    static propTypes = {
        userLogOut: PropTypes.bool.isRequired,
    };

    rendeLinks() {
        const {userLogOut} = this.props;
        if(userLogOut){
            return (
                <div className="main-header-nav">
                    <Link className="header-link" to="/login">Авторизация</Link>
                    <Link className="header-link" to="/registration">Регистрация</Link>
                </div>
            );
        }
        return (
            <div className="main-header-nav">
                <Link className="header-link" to="/hello">Расписание</Link>
                <Link className="header-link" to="/hello">Входные данные</Link>
                <Link className="header-link" to="/hello">Чат</Link>
                <Link className="header-link" to="/hello">Выйти</Link>
            </div>
        );
    }

    render() {
        return (
            <header className="main-header">
                <div className="header-logo">LOGO</div>
                {this.rendeLinks()}
            </header>
        );
    }
}

function mapStateToProps() {
    return {
        isReady: true,
    };
}

Header.defaultProps = {
    email: '',
};


export default withRouter(connect(mapStateToProps)(Header));