import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class BookList extends Component {
		render() {
			const {books} = this.props
			var bookList = books.map(book => {
				return (
					<Col md={4} xs={3} key={book.id}>
						<Link to={'/book/' + book.id}><img src={book.cover} alt="book cover" /></Link>
						<button>borrow</button>
					</Col>
				)
			})
				return (
					<Grid>
						<Row className="show-grid">
							{bookList}
						</Row>
					</Grid>
				)
		}
}

export default BookList