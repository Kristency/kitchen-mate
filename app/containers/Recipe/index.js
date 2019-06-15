import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = (theme) => {
	return {
		paper: {
			padding: 20,
			[theme.breakpoints.up('sm')]: {
				margin: '5px 0',
				height: 565
			},
			[theme.breakpoints.down('xs')]: {
				height: 279
			},
			overflowY: 'auto'
		}
		// '@global': {
		// 	'html, body, #app': {
		// 		height: '100%'
		// 	}
		// },
		// container: {
		// 	[theme.breakpoints.up('sm')]: {
		// 		height: 'calc(100% - 64px - 48px)'
		// 	},
		// 	[theme.breakpoints.down('xs')]: {
		// 		height: 'calc(100% - 56px - 48px)'
		// 	}
		// },
		// item: {
		// 	[theme.breakpoints.down('xs')]: {
		// 		height: '50%'
		// 	}
		// }
	};
};

const Recipe = (props) => {
	const { classes } = props;
	return (
		<Container maxWidth="lg">
			<Grid container>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<LeftPane />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<RightPane />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default withStyles(styles)(Recipe);
