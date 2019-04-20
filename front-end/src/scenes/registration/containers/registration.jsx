import React from 'react';

import Header from '../../../core/components/header/header';
import Footer from '../../../core/components/footer/footer'
import RegistrationForm from '../components/registr-form';

import "./registration.scss";

class Registration extends React.Component {
    render() {
        return (
            <div className="main-registration-wrapper">
                <Header userLogOut={true}/>
                <div className="main-content">
                    <RegistrationForm/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Registration;
