import { combineReducers } from 'redux'

import {
	GET_LIST, GET_BOOK, GET_SEARCH_RESULT
} from './actions'

function books(state = [], action) {
	switch(action.type) {
		case GET_LIST:
			return {
				...state,
				books: action.payload.books
			}
		default:
			return state
	}
}

function book(state = [], action) {
	switch(action.type) {
		case GET_BOOK:
			return {
				...state,
				book: action.payload.book
			}
		default:
			return state
	}
}

function searchedBooks(state = [], action) {
	switch(action.type) {
		case GET_SEARCH_RESULT:
			return {
				...state,
				searchResult: action.payload.searchResult
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	books,
	book,
	searchedBooks
})

export default rootReducer