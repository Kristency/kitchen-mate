import { FETCH_RECIPE_DETAILS } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_RECIPE_DETAILS:
			//return [ ...state, action.payload ];
			let newState = [ ...state, action.payload ];
			return [ ...new Set(newState) ];
		default:
			return state;
	}
};
