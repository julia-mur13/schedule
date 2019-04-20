import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
            </footer>
        );
    }
}

function mapStateToProps() {
    return {
        isReady: true,
    };
}

Footer.defaultProps = {
    email: '',
};


export default withRouter(connect(mapStateToProps)(Footer));