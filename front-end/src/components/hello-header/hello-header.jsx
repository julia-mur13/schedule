import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class HelloHeader extends React.Component {
    render() {
        return (
            <header className="hello-header">
                <div className="header-logo">LOGO</div>
                <div className="hello-header-nav">
                    <a className="header-authorization" href="https://www.google.com">Авторизация</a>
                    <a className="header-registration" href="https://www.google.com">Регистрация</a>
                </div>
            </header>
        );
    }
}

function mapStateToProps() {
    return {
        isReady: true,
    };
}

HelloHeader.defaultProps = {
    email: '',
};


export default withRouter(connect(mapStateToProps)(HelloHeader));