import React, {Component} from 'react'

class BookDetail extends Component {
		constructor(props) {
			super(props)
			this.state = {
				book: [],
				borrowers: []
			}
		}

		binarySearch(arr, id) {
			var left = 0, right = arr.length, mid
			while(left < right) {
				mid = (left + right) >>> 1
				arr[mid]._id < id ? left = mid + 1: right = mid
			}

			return left
		}

		keepSynchronizing(db) {
			var that = this
			db.changes({
				live: true,
				since: 'now',
				include_docs: true
			}).on('change', function(change) {
				var updatedBook = change.doc
				that.setState({
					book: updatedBook,
					borrowers: updatedBook.borrowers
				})
			}).on('error', console.log.bind(console))
		}

		componentDidMount() {
			const {books} = this.props
			if(books && books.length) {
				const id = this.props.match.params.id
				var idx = this.binarySearch(books, id)

				if(books[idx] !== this.state.book) {
					var book = books[idx]
					this.setState({
						book: book,
						borrowers: book.borrowers
					})
				}
			}
		}

		componentWillUpdate(nextProps, nextState) {
			const {books} = nextProps
			if(books && books.length) {
				const id = this.props.match.params.id
				var idx = this.binarySearch(books, id)

				if(books[idx] !== this.state.book) {
					var book = books[idx]
					this.setState({
						book: book,
						borrowers: book.borrowers
					})
				}
			}
		}

		componentDidUpdate() {
			const {db} = this.props
			this.keepSynchronizing(db)
		}

		render() {
				const {book, borrowers} = this.state
				return (
					<div className="row book-detail">
						<div className="col-xs-12 col-md-4 col-lg-5 book-cover">
							<img src={book.cover} alt="book cover" />
						</div>
						<div className="col-xs-12 col-md-8 col-lg-7">
							<h2>{book.name}</h2>
							<h4>By: {book.author}</h4>
							<p><strong>ISBN: {book.isbn}</strong></p>
							<p><strong>Publisher: {book.provider}</strong></p>
							<p><strong>Quantity: {book.quantity}</strong></p>
							<div className="book-borrower">
								<span><strong>Borrowers: </strong></span>
								{borrowers.length ? (
									borrowers.map(function(borrower) {
										return (
											<img src={borrower.avatar} key={borrower.id} alt="avatar" />
										)
									})
								) : (
									<span>Chưa có ai mượn sách này</span>
								)}
							</div>
							<div className="category-tag">
								<span><strong>Category: </strong></span>
								<span>Art, </span>
								<span>Business, </span>
								<span>Ebooks</span>
							</div>
							<hr />
							<p dangerouslySetInnerHTML={{__html: book.description}}></p>
						</div>
					</div>
				)
		}
}

export default BookDetail
