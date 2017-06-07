import fetch from 'isomorphic-fetch'

export const RECEIVE_LIST = 'RECEIVE_LIST'
export const RECEIVE_BOOK = 'RECEIVE_BOOK'
export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT'

export function receiveList(json) {
	return {
		type: RECEIVE_LIST,
		payload: {
			books: JSON.parse(json)
		}
	}
}

export function receiveBook(json) {
	return {
		type: RECEIVE_LIST,
		payload: {
			book: JSON.parse(json)
		}
	}
}

export function receiveSearchResult(json) {
	return {
		type: RECEIVE_SEARCH_RESULT,
		payload: {
			searchResult: JSON.parse(json)
		}
	}
}

export function fetchList(page, limit) {
	return dispatch => {
		return fetch('http://tekobooks.herokuapp.com/api/book?page=' + page + '&limit=' + limit)
			.then(response => response.json())
			.then(json => dispatch(receiveList(json)))
	}
}

export function fetchBook(id) {
	return dispatch => {
		return fetch('http://tekobooks.herokuapp.com/api/book/' + id)
			.then(response => response.json())
			.then(json => dispatch(receiveBook(json)))
	}
}

export function searchBook(query) {
	return dispatch => {
		return fetch('http://tekobooks.herokuapp.com/api/search/?query=' + query)
			.then(response => response.json())
			.then(json => dispatch(receiveSearchResult(json)))
	}
}