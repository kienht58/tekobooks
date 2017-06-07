import { combineReducers } from 'redux'

import {
	RECEIVE_LIST, RECEIVE_BOOK, RECEIVE_SEARCH_RESULT
} from './actions'

function books(state = {
	books: [],
	book: [],
	searchResult: []
}, action) {
	switch(action.type) {
		case RECEIVE_LIST:
			return {
				...state,
				books: action.payload.books
			}
		case RECEIVE_BOOK:
			return {
				...state,
				book: action.payload.book
			}
		case RECEIVE_SEARCH_RESULT:
			return {
				...state,
				searchResult: action.payload.searchResult
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	books
})

export default rootReducer