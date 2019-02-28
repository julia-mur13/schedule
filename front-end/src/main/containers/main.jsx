import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (<div className="main-content">a</div>);
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