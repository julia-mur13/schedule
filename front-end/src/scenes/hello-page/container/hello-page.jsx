import React from 'react';
import {Link} from 'react-router-dom';

import './hello-page.scss';

class HelloPage extends React.Component {
    render() {
        return (
            <div className="hello-page">
                <div className="text-wrapper">
                    <p className="text">Здравствуйте! Вам необходимо&nbsp;
                        <Link to="/login">авторизоваться</Link>.
                        <br/>Если вы впервые на нашем сайте,&nbsp;
                        <Link to="/registration">зарегистрируйтесь</Link>.
                    </p>
                </div>
            </div>
        );
    }
}

export default HelloPage;