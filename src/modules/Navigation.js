import React, {Component} from 'react';
import {Layout, Menu , Icon} from 'antd';

const {Header} = Layout;

class Navigation extends Component {
	render() {
		return (
			<Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3" style={{float: 'right'}}><Icon type="team" /></Menu.Item>
          <Menu.Item key="4" style={{float: 'right'}}><Icon type="smile-o" /></Menu.Item>
          <Menu.Item key="5" style={{float: 'right'}}><Icon type="heart" /></Menu.Item>
        </Menu>
      </Header>
		);
	}
}

export default Navigation;