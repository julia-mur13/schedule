import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import HelloPage from '../../scenes/hello-page/hello-page';
import Registration from '../../scenes/registration/containers/registration';
import LogIn from '../../scenes/login/containers/login';


class Main extends React.Component {
    renderCommonRoutes() {
        return [
            {
                key: 'hello',
                url: '/hello',
                component: HelloPage,
            }
        ];
    }

    renderSwitch() {
        return (
            <Switch>
                <Route exact path="/hello" component={HelloPage}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/login" component={LogIn}/>
                <Redirect to="/hello"/>
            </Switch>
        );
    }

    render() {
        // const role = 'dispatcher';
        return (
            <div className="main">
                    {this.renderSwitch()}
            </div>
        );
    }
}

function mapStateToProps() {
    return {
        isReady: true,
    };
}

Main.defaultProps = {
    email: '',
};


export default withRouter(connect(mapStateToProps)(Main));