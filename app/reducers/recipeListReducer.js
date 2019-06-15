import { FETCH_RECIPE_LIST } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_RECIPE_LIST:
			return action.payload;
		default:
			return state;
	}
};
