import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HelloPage from '../../scenes/hello-page/hello-page';

class Main extends React.Component {
    render() {
        return (<HelloPage/>);
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