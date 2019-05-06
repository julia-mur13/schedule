import React from 'react';
import * as PropTypes from "prop-types";
import {Menu} from 'antd';
import { history } from '../../../service/configure-store';

import './horizontal-menu.scss';
import {MENU_ITEMS} from './menu-items';
import {COMMON_ROUTES} from "../../../main/containers/common-routes";

const SubMenu = Menu.SubMenu;

class HorizontalMenu extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    getActiveItem() {
        const pathname = window.location.pathname;
        return pathname.substr(pathname.lastIndexOf("/") + 1);
    }

    state = {
        current: this.getActiveItem(),
    };

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        const routeObject = COMMON_ROUTES.find(route => route.key === e.key);
        history.push(routeObject.url);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="dark"
                className="horizontal-menu"
            >
                {MENU_ITEMS.reduce((menu, submenu) => {
                    if (submenu.userRoles.includes(this.props.user.role)) {
                        if (submenu.items.length) {
                            menu.push(
                                <SubMenu key={submenu.key}
                                         title={<span className="submenu-title-wrapper">{submenu.title}</span>}
                                >
                                    {submenu.items.map((item) => {
                                        return (<Menu.Item key={item.key}>{item.title}</Menu.Item>)
                                    })}
                                </SubMenu>);
                        } else {
                            menu.push(<Menu.Item key={submenu.key}>{submenu.title}</Menu.Item>);
                        }
                    }
                    return menu;
                }, [])}
            </Menu>
        );
    }
}

export default HorizontalMenu;
