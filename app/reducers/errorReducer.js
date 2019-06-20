import { FETCH_RECIPE_LIST_FAILURE, FETCH_RECIPE_DETAILS_FAILURE } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_RECIPE_LIST_FAILURE:
			return action.error;
		case FETCH_RECIPE_DETAILS_FAILURE:
			return action.error;
		default:
			return state;
	}
};
