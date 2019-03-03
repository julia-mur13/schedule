import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import HelloHeader from '../../components/hello-header/hello-header';

class HelloPage extends React.Component {
    render() {
        return (
            <div className="hello-page">
                <HelloHeader/>
                <div className="hello-page-text">
                    <p>Здравствуйте! Вам необходимо&nbsp;
                        <a href="https://www.google.com">авторизоваться</a>.
                    </p>
                    <p>Если вы впервые на нашем сайте,&nbsp;
                        <a href="https://www.google.com">зарегистрируйтесь</a>.
                    </p>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {
        isReady: true,
    };
}

HelloPage.defaultProps = {
    email: '',
};


export default withRouter(connect(mapStateToProps)(HelloPage));