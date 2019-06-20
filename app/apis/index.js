import axios from 'axios';

import { proxy, key, baseURL } from './config';

export const fetchRecipeList = async (searchQuery) => {
	const response = await axios.get(`${proxy}${baseURL}/search?key=${key}&q=${searchQuery}`);

	if (response.status >= 400) {
		throw new Error('fetch request for recipe list failed!!');
	}
	return response.data.recipes;
};

export const fetchRecipeDetails = async (recipeId) => {
	const response = await axios.get(`${proxy}${baseURL}/get?key=${key}&rId=${recipeId}`);

	if (response.status >= 400) {
		throw new Error('fetch request for recipe details failed!!');
	}
	return response.data.recipe;
};
