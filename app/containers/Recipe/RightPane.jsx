import React, { Component, Fragment } from 'react';
import clsx from 'clsx';
import {
	Collapse,
	CardContent,
	CardHeader,
	IconButton,
	CardMedia,
	CardActions,
	List,
	ListItem,
	ListItemText,
	Divider,
	withStyles
} from '@material-ui/core';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import Favorite from '@material-ui/icons/Favorite';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { connect } from 'react-redux';

const styles = (theme) => {
	return {
		media: {
			height: 0,
			paddingTop: '56.25%' // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: 'rotate(180deg)'
		},
		checkIcon: {
			marginRight: theme.spacing(2)
		}
	};
};

export class RightPane extends Component {
	state = {
		expanded: false
	};

	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	renderIngredientsList = () => {
		return this.props.recipe.ingredients.map((ingredient, index) => {
			return (
				<Fragment key={index}>
					<ListItem>
						<CheckCircle className={this.props.classes.checkIcon} color="secondary" />
						<ListItemText primary={ingredient} />
					</ListItem>
					<Divider />
				</Fragment>
			);
		});
	};

	renderRecipeCard = () => {
		if (!this.props.recipe) {
			return null;
		} else {
			const { image_url, title, publisher } = this.props.recipe;
			const { classes } = this.props;
			return (
				<Fragment>
					<CardHeader title={title} subheader={publisher} />
					<CardMedia className={classes.media} image={image_url} title={title} />
					<CardActions disableSpacing>
						<IconButton aria-label="Add to favorites">
							<Favorite />
						</IconButton>
						<IconButton aria-label="Add to shopping list">
							<LocalGroceryStore />
						</IconButton>
						<IconButton
							className={clsx(classes.expand, {
								[classes.expandOpen]: this.state.expanded
							})}
							onClick={this.handleExpandClick}
							aria-expanded={this.state.expanded}
							aria-label="Show ingredients"
						>
							<ExpandMore />
						</IconButton>
					</CardActions>
					<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
						<CardContent>{this.renderIngredientsList()}</CardContent>
					</Collapse>
				</Fragment>
			);
		}
	};
	render() {
		return <List>{this.renderRecipeCard()}</List>;
	}
}

const mapStateToProps = (state) => {
	const { recipeDetails, currentlySelectedRecipe } = state;
	return {
		recipe: recipeDetails.find((recipe) => {
			return recipe.recipe_id === currentlySelectedRecipe;
		})
	};
};

const styleWrapped = withStyles(styles)(RightPane);

export default connect(mapStateToProps)(styleWrapped);
