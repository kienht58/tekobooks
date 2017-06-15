import PouchDB from 'pouchdb'
import fetch from 'isomorphic-fetch'

export default function generateDatabase(url) {
	if(process.env.NODE_ENV === 'development') {
		var db = new PouchDB(url)
		fetch('http://tekobooks.herokuapp.com/api/book/?page=1&limit=10')
			.then(function(result) {
				result.json().then(function(res) {
					var books = JSON.parse(res).books
					books.forEach(function(book, idx) {
						book._id = '' + book.id
						db.put(book).then(function(response) {
							console.log('database initiation successful')
						}).catch(function(error) {
							console.log(error)
						})
					})
				})
			})
	}
}