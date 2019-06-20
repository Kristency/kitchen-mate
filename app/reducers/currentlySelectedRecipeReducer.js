import { SET_CURRENTLY_SELECTED_RECIPE } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case SET_CURRENTLY_SELECTED_RECIPE:
			return action.recipeId;
		default:
			return state;
	}
};
