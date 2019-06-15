import food2fork from '../apis/food2fork';
import { key } from '../apis/config';
import { FETCH_RECIPE_LIST, FETCH_RECIPE_DETAILS, CURRENTLY_SELECTED_RECIPE } from './types';

export const fetchRecipeList = (searchQuery) => {
	return async (dispatch) => {
		try {
			const response = await food2fork.get(`/search?key=${key}&q=${searchQuery}`);

			dispatch({
				type: FETCH_RECIPE_LIST,
				payload: response.data.recipes
			});
		} catch (error) {
			alert(error);
		}
	};
};

export const fetchRecipeDetails = (recipeId) => {
	return async (dispatch, getState) => {
		let foundRecipe = getState().recipeDetails.find((recipe) => {
			return recipe.recipe_id === recipeId;
		});

		if (!foundRecipe) {
			try {
				const response = await food2fork.get(`/get?key=${key}&rId=${recipeId}`);

				dispatch({
					type: FETCH_RECIPE_DETAILS,
					payload: response.data.recipe
				});
			} catch (error) {
				alert(error);
			}
		} else {
			dispatch({
				type: FETCH_RECIPE_DETAILS,
				payload: foundRecipe
			});
		}
	};
};

export const currentlySelectedRecipe = (recipeId) => {
	return async (dispatch) => {
		await dispatch(fetchRecipeDetails(recipeId));
		dispatch({
			type: CURRENTLY_SELECTED_RECIPE,
			payload: recipeId
		});
	};
};
