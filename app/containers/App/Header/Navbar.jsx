import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import FastFood from '@material-ui/icons/FastFood';

import SearchBar from './SearchBar';

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<FastFood fontSize="large" />
				<Typography variant="h4" color="inherit">
					Kitchen Mate
				</Typography>
				<SearchBar />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
