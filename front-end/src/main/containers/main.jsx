import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as PropTypes from "prop-types";

import Header from "../../core/components/header/header";
import Footer from "../../core/components/footer/footer";

import {COMMON_ROUTES} from './commonRoutes';
import * as logInReducers from '../../scenes/login/services/reducers/reducers';

class Main extends React.Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    render() {
        const {user} = this.props;
        return (
            <div className="main">
                <Header/>
                <Switch>
                    {COMMON_ROUTES.reduce((routers, el) => {
                        if (el.users.includes(user.role.toUpperCase())) {
                            routers.push(<Route
                                key={el.key}
                                exact
                                path={el.url}
                                component={el.component}
                            />);
                        }
                        return routers;
                    }, [])}
                    <Redirect to={(user.role === 'GUEST')? '/hello': '/all_schedules'}/>}
                </Switch>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: logInReducers.getUser(state),
    };
}

export default withRouter(connect(mapStateToProps)(Main));
