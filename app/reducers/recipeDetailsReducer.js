import { FETCH_RECIPE_DETAILS_SUCCESS } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_RECIPE_DETAILS_SUCCESS:
			//return [ ...state, action.payload ];
			let newState = [ ...state, action.recipeDetails ];
			return [ ...new Set(newState) ];
		default:
			return state;
	}
};
