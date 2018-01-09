export default function reducer(state={
		bands:[],
		fetching: false,
		fetched: false,
		error: null
	}, action){

	switch (action.type){
		case "FETCH_BANDS_FULFILLED":{
			return {
				...state,
				fetched: true,
				fetching: false,
				bands: action.payload,
			};
		}
		case "FETCH_BANDS_REJECTED":{
			return {...state, fetching: false, error: action.payload};
		}
		case "FETCH_BANDS":{
			return {...state, fetching: true};
		}
		default:
		 return state;
	}
}