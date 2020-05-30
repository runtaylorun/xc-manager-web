import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const NavBar = () => {
	return (
		<Menu size="big" widths="8" icon="labeled" horizontal>
			<Menu.Item name="Brand">
				<h1>XC Manager</h1>
			</Menu.Item>
			<Menu.Item name="Home">
				<Icon name="home" />
			</Menu.Item>
			<Menu.Item name="Roster">
				<Icon name="book" />
			</Menu.Item>
			<Menu.Item name="Schedule">
				<Icon name="calendar alternate" />
			</Menu.Item>
			<Menu.Item name="Team Stats">
				<Icon name="trophy" />
			</Menu.Item>
			<Menu.Item name="Settings">
				<Icon name="setting" />
			</Menu.Item>
		</Menu>
	);
};

export default NavBar;
