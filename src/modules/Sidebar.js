import React, {Component} from 'react';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
	render() {
		return (
			<Menu
				style={{width: 240, background: '#fff', border: 'none'}}
				mode="inline"
			>
				<SubMenu
					key="sub1"
					title="Navigation 1"
				>
					<Menu.Item key="1">Option 1</Menu.Item>
					<Menu.Item key="2">Option 2</Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub2"
					title="Navigation 2"
				>
					<Menu.Item key="3">Option 3</Menu.Item>
					<Menu.Item key="4">Option 4</Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub3"
					title="Navigation 3"
				>
					<Menu.Item key="5">Option 5</Menu.Item>
					<Menu.Item key="6">Option 6</Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub4"
					title="Navigation 4"
				>
					<Menu.Item key="7">Option 7</Menu.Item>
					<Menu.Item key="8">Option 8</Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub5"
					title="Navigation 5"
				>
					<Menu.Item key="9">Option 9</Menu.Item>
					<Menu.Item key="10">Option 10</Menu.Item>
				</SubMenu>
				<SubMenu
					key="sub6"
					title="Navigation 6"
				>
					<Menu.Item key="11">Option 11</Menu.Item>
					<Menu.Item key="12">Option 12</Menu.Item>
				</SubMenu>
				<Menu.Item key="13">Option 13</Menu.Item>
				<Menu.Item key="14">Option 14</Menu.Item>
				<Menu.Item key="15">Option 15</Menu.Item>
				<Menu.Item key="16">Option 16</Menu.Item>
				<a
	        href="https://www.google.com/search?q=adventure"
	        target="_blank"
	        rel="noopener noreferrer"
	      >
        	More...
      	</a>
			</Menu>
		);
	}
}

export default Sidebar;