import React from 'react';
import * as PropTypes from "prop-types";

import './button.scss';

import {Button} from 'antd';

class GeneralButton extends React.PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const { text, className } = this.props;
        return (
            <Button type="primary" htmlType="submit" className={`general-button ${className}`}
            onClick={this.props.onClick}
            >{text}</Button>
        );
    }
}

export default GeneralButton;