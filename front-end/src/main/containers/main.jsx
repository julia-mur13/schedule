import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import {Layout} from 'antd';
import './main.scss';
import CustomHeader from "../../core/components/custom-header/custom-header";
import CustomFooter from "../../core/components/custom-footer/custom-footer";

import {COMMON_ROUTES} from './common-routes';
import * as logInReducers from '../../scenes/login/service/reducers/reducers';

class Main extends React.Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    getRoutes() {
        const {user} = this.props;
        return COMMON_ROUTES.reduce((routers, el) => {
            if (el.userRoles.includes(user.role.toUpperCase())) {
                routers.push(<Route
                    key={el.key}
                    exact
                    path={el.url}
                    component={el.component}
                />);
            }
            return routers;
        }, []);
    }

    render() {
        const {user} = this.props;
        return (
            <div className="main">
                <Layout className="custom-layout">
                    <CustomHeader user={user}/>
                    <div className="main-content">
                        <Switch>
                            {this.getRoutes()}
                            <Redirect exact to={(user.role === 'GUEST') ? '/hello' : '/schedule/all_schedules'}/>
                        </Switch>
                    </div>
                    <CustomFooter/>
                </Layout>
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
