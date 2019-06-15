/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import recipeListReducer from './recipeListReducer';
import recipeDetailsReducer from './recipeDetailsReducer';
import currentlySelectedRecipeReducer from './currentlySelectedRecipeReducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
	language: languageProviderReducer,
	recipeList: recipeListReducer,
	recipeDetails: recipeDetailsReducer,
	currentlySelectedRecipe: currentlySelectedRecipeReducer,
	form: formReducer
});
