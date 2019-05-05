import React from 'react';
import {Layout} from 'antd';
import './custom-footer.scss';

const {Footer} = Layout;

class CustomFooter extends React.Component {
    render() {
        return (
            <Footer className="main-footer"/>
        );
    }
}

export default CustomFooter;
