import { combineReducers } from 'redux'

import {
	GET_LIST, GET_BOOK, GET_SEARCH_RESULT, CLEAR_SEARCH
} from './actions'

function bookList(state = [], action) {
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

function bookDetail(state = [], action) {
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
		case CLEAR_SEARCH:
			return {
				...state,
				searchResult: []	
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	bookList,
	bookDetail,
	searchedBooks
})

export default rootReducer