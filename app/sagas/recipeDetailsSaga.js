import { takeEvery, select, put, call } from 'redux-saga/effects';

import { SET_CURRENTLY_SELECTED_RECIPE } from '../actions/types';
import { setRecipeDetails, setRecipeDetailsError } from '../actions';
import { fetchRecipeDetails } from '../apis';

const getRecipeDetails = (state) => {
	return state.recipeDetails;
};

function* recipeDetailsRequestWorker(action) {
	const { recipeId } = action;
	const recipeDetails = yield select(getRecipeDetails);

	let foundRecipe = recipeDetails.find((recipe) => {
		return recipe.recipe_id === recipeId;
	});

	if (!foundRecipe) {
		try {
			const recipeDetails = yield call(fetchRecipeDetails, recipeId);
			yield put(setRecipeDetails(recipeDetails));
		} catch (error) {
			yield put(setRecipeDetailsError(error.toString()));
		}
	} else {
		yield put(setRecipeDetails(foundRecipe));
	}
}

export default function* recipeDetailsRequestWatcher() {
	yield takeEvery(SET_CURRENTLY_SELECTED_RECIPE, recipeDetailsRequestWorker);
}
