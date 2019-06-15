import React, { Component } from 'react';
import { TextField, withStyles, withWidth } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchRecipeList } from 'actions';

const styles = (theme) => {
	return {
		inputInput: {
			padding: theme.spacing(1, 1, 1, 7),
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.down('xs')]: {
				width: 180
			},
			[theme.breakpoints.up('sm')]: {
				width: 400
			},
			[theme.breakpoints.up('md')]: {
				width: 600
			}
		}
	};
};

class SearchBar extends Component {
	renderInput = ({ input, label }) => {
		const { classes } = this.props;
		return (
			<TextField
				placeholder={label}
				className={classes.inputInput}
				inputProps={{ ...input }}
				autoComplete="off"
			/>
		);
	};

	onFormSubmit = (formValues) => {
		this.props.fetchRecipeList(formValues.searchTerm);
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
				<Field name="searchTerm" component={this.renderInput} label={(this.props.width==='xs')?"Search Recipe":"What do you wanna make today..."} />
			</form>
		);
	}
}

const formWrapped = reduxForm({
	form: 'searchBar'
})(SearchBar);

const styleWrapped = withWidth()(withStyles(styles)(formWrapped));

export default connect(null, { fetchRecipeList })(styleWrapped);
