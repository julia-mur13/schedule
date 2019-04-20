import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../core/components/header/header';
import './hello-page.scss';

class HelloPage extends React.Component {
    render() {
        return (
            <div className="hello-page">
                <Header userLogOut={true}/>
                <div className="hello-page-container">
                    <div className="text-wrapper">
                        <p className="text">Здравствуйте! Вам необходимо&nbsp;
                            <Link to="/login">авторизоваться</Link>.
                            <br/>Если вы впервые на нашем сайте,&nbsp;
                            <Link to="/registration">зарегистрируйтесь</Link>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HelloPage;