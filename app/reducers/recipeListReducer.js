import { FETCH_RECIPE_LIST_SUCCESS } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_RECIPE_LIST_SUCCESS:
			return action.recipeList;
		default:
			return state;
	}
};
