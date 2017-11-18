import { FETCH_MOIM } from '../actions/index';

// const initialState = {
//     moimList: [],
// };

const initialState = {
    moimList: [
			{
				title: '제6회 경찰청 인권영화제',
				thumbnail: 'https://onoffmix.com/images/event/91161/s',
				moimDate: '2017-08-27',
				like: 5
			},{
				title: '시간관리 첫걸음 - 나에게 맞는 시간관리법 찾기',
				thumbnail: 'https://onoffmix.com/images/event/84413/s',
				moimDate: '2017-08-25',
				like: 7
			},{
				title: 'TEDxDongdaemun',
				thumbnail: 'https://onoffmix.com/images/event/108950/s',
				moimDate: '2017-08-20',
				like: 10
			}
		],
};


export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_MOIM:
      // return { ...state, moimList: action.payload.data };
      return state;
		default:
			return state;
	}
}
