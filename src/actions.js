import fetch from 'isomorphic-fetch'

export const GET_LIST = 'GET_LIST'
export const GET_BOOK = 'GET_BOOK'
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT'

export function getList(json) {
	return {
		type: GET_LIST,
		payload: {
			books: JSON.parse(json)
		}
	}
}

export function getBook(json) {
	return {
		type: GET_BOOK,
		payload: {
			book: JSON.parse(json)
		}
	}
}

export function getSearchResult(json) {
	return {
		type: GET_SEARCH_RESULT,
		payload: {
			searchResult: JSON.parse(json)
		}
	}
}

export function fetchList(page, limit) {
	return dispatch => {
		return fetch('http://tekobooks.herokuapp.com/api/book?page=' + page + '&limit=' + limit)
			.then(response => response.json())
			.then(json => dispatch(getList(json)))
	}
}

export function fetchBook(id) {
	return dispatch => {
		return fetch('http://tekobooks.herokuapp.com/api/book/' + id)
			.then(response => response.json())
			.then(json => dispatch(getBook(json)))
	}
}

export function searchBook(query) {
	return dispatch => {
		return fetch('http://tekobooks.herokuapp.com/api/search/?query=' + query)
			.then(response => response.json())
			.then(json => dispatch(getSearchResult(json)))
	}
}