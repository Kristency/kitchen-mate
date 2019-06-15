import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import Favorite from '@material-ui/icons/Favorite';
import Book from '@material-ui/icons/Book';

const Footer = () => {
	const [ value, setValue ] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<AppBar position="static">
			<Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" centered>
				<Tab icon={<Book fontSize="large" />} label="Recipes" />
				<Tab icon={<LocalGroceryStore fontSize="large" />} label="Shopping List" />
				<Tab icon={<Favorite fontSize="large" />} label="Favorites" />
			</Tabs>
		</AppBar>
	);
};

export default Footer;
