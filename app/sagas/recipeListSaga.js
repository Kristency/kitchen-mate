import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_RECIPE_LIST_START } from '../actions/types';
import { setRecipeList, setRecipeListError } from '../actions';
import { fetchRecipeList } from '../apis';

function* recipeListRequestWorker(action) {
	try {
		const recipeList = yield call(fetchRecipeList, action.searchQuery);
		yield put(setRecipeList(recipeList));
	} catch (error) {
		yield put(setRecipeListError(error.toString()));
	}
}

export default function* recipeListRequestWatcher() {
	yield takeEvery(FETCH_RECIPE_LIST_START, recipeListRequestWorker);
}
