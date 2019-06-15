import { CURRENTLY_SELECTED_RECIPE } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case CURRENTLY_SELECTED_RECIPE:
			return action.payload;
		default:
			return state;
	}
};
