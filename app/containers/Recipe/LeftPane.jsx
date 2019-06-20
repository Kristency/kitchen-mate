import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	List,
	ListItem,
	Divider,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Typography,
	withStyles
} from '@material-ui/core';

import { setCurrentlySelectedRecipe } from 'actions';

const styles = (theme) => {
	return {
		root: {
			width: '100%',
			maxWidth: 700,
			backgroundColor: theme.palette.background.paper
		},
		inline: {
			display: 'inline'
		}
	};
};

class LeftPane extends Component {
	state = { selectedIndex: null };

	onSelect = (recipeId, index) => {
		this.setState({ selectedIndex: index });
		this.props.setCurrentlySelectedRecipe(recipeId);
	};

	renderRecipesList() {
		const { classes, recipeList } = this.props;

		return recipeList.map((recipe, index) => {
			return (
				<Fragment key={recipe.recipe_id}>
					<ListItem
						alignItems="flex-start"
						button
						selected={this.state.selectedIndex === index}
						onClick={() => {
							this.onSelect(recipe.recipe_id, index);
						}}
					>
						<ListItemAvatar>
							<Avatar alt={recipe.title} src={recipe.image_url} />
						</ListItemAvatar>
						<ListItemText
							primary={
								<Fragment>
									<Typography color="secondary">{recipe.title}</Typography>
								</Fragment>
							}
							secondary={
								<Fragment>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										Publisher
									</Typography>
									{` — ${recipe.publisher}`}
								</Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
				</Fragment>
			);
		});
	}

	render() {
		return (
			<div>
				<List className={this.props.classes.root}>{this.renderRecipesList()}</List>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		recipeList: state.recipeList
	};
};

const stylesWrappedLeftPane = withStyles(styles)(LeftPane);

export default connect(mapStateToProps, { setCurrentlySelectedRecipe })(stylesWrappedLeftPane);
