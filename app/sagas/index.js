import { all } from 'redux-saga/effects';

import recipeListSaga from './recipeListSaga';
import recipeDetailsSaga from './recipeDetailsSaga';

export default function* rootSaga() {
	yield all([ recipeListSaga(), recipeDetailsSaga() ]);
}
