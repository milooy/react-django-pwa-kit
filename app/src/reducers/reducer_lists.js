import { FETCH_MOIM } from '../actions/index';

const initialState = {
    moimList: [],
};


export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_MOIM:
			return { ...state, moimList: action.payload.data };
		default:
			return state;
	}
}
