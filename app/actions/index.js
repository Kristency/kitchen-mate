import {
	FETCH_RECIPE_LIST_START,
	FETCH_RECIPE_LIST_SUCCESS,
	FETCH_RECIPE_LIST_FAILURE,
	FETCH_RECIPE_DETAILS_START,
	FETCH_RECIPE_DETAILS_SUCCESS,
	FETCH_RECIPE_DETAILS_FAILURE,
	SET_CURRENTLY_SELECTED_RECIPE
} from './types';

export const loadRecipeList = (searchQuery) => {
	return {
		type: FETCH_RECIPE_LIST_START,
		searchQuery
	};
};

export const setRecipeList = (recipeList) => {
	return { type: FETCH_RECIPE_LIST_SUCCESS, recipeList };
};

export const setRecipeListError = (error) => {
	return { type: FETCH_RECIPE_LIST_FAILURE, error };
};

export const setCurrentlySelectedRecipe = (recipeId) => {
	return { type: SET_CURRENTLY_SELECTED_RECIPE, recipeId };
};

export const loadRecipeDetails = () => {
	return {
		type: FETCH_RECIPE_DETAILS_START
	};
};

export const setRecipeDetails = (recipeDetails) => {
	return {
		type: FETCH_RECIPE_DETAILS_SUCCESS,
		recipeDetails
	};
};

export const setRecipeDetailsError = (error) => {
	return {
		type: FETCH_RECIPE_DETAILS_FAILURE,
		error
	};
};
