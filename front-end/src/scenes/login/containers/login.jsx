import React from 'react';

import './login.scss';

import Header from '../../../core/components/header/header';
import LogInForm from './../components/login-form';
import Footer from "../../../core/components/footer/footer";

class LogIn extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <Header userLogOut={true}/>
                <div className="main-content">
                    <LogInForm/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LogIn;
