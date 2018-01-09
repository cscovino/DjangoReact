import { combineReducers } from 'redux'

import bands from './bandsReducer'
import band from './bandReducer'

export default combineReducers({
	bands,
	band,
})