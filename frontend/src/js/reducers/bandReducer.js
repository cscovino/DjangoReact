export default function reducer(state={
		band:{},
		id:-1,
		fetching: false,
		fetched: false,
		error: null
	}, action){

	switch (action.type){
		case "GET_BAND_FULFILLED":{
			return {
				...state,
				fetched: true,
				fetching: false,
				band: action.payload,
			};
		}
		case "GET_BAND_REJECTED":{
			return {...state, fetching: false, error: action.payload};
		}
		case "GET_BAND":{
			return {...state, fetching: true};
		}
		default:
		 return state;
	}
}