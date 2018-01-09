import axios from 'axios'

export function fetchBands(){
	return function(dispatch){
		axios.get('http://127.0.0.1:8000/band/api/all/')
		 .then((response) => {
		 	dispatch({type: 'FETCH_BANDS_FULFILLED', payload: response.data})
		 })
		 .catch((err) => {
		 	dispatch({type: 'FETCH_BANDS_REJECTED', payload: err})
		 })
	}
}

export function getBand(key){
	const url = 'http://127.0.0.1:8000/band/api/'+key+'/';
	return function(dispatch){
		axios.get(url)
		 .then((response) => {
		 	dispatch({type: 'GET_BAND_FULFILLED', payload: response.data})
		 })
		 .catch((err) => {
		 	dispatch({type: 'GET_BAND_REJECTED', payload: err})
		 })
	}
}

export function addBand(name, image, bio){
	return function(dispatch){
		axios.post('http://127.0.0.1:8000/band/new/', {
				name: name,
				image: image,
				bio: bio,
			})
		 .then((response) => {
		 	console.log(response.data);
		 	axios.get('http://127.0.0.1:8000/band/api/all/')
			 .then((response) => {
			 	dispatch({type: 'FETCH_BANDS_FULFILLED', payload: response.data})
			 })
			 .catch((err) => {
			 	dispatch({type: 'FETCH_BANDS_REJECTED', payload: err})
			 })
		 })
		 .catch((err) => {
		 	dispatch({type: 'FETCH_BANDS_REJECTED', payload: err})
		 })
	}
}

export function delBand(key){
	const url = 'http://127.0.0.1:8000/band/del/'+key+'/';
	return function(dispatch){
		axios.post(url)
		 .then((response) => {
		 	console.log(response.data);
		 	axios.get('http://127.0.0.1:8000/band/api/all/')
			 .then((response) => {
			 	dispatch({type: 'FETCH_BANDS_FULFILLED', payload: response.data})
			 })
			 .catch((err) => {
			 	dispatch({type: 'FETCH_BANDS_REJECTED', payload: err})
			 })
		 })
		 .catch((err) => {
		 	dispatch({type: 'FETCH_BANDS_REJECTED', payload: err})
		 })
	}
}