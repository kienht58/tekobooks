import React, {Component} from 'react';
import ClientHTTPRequest from './ClientHTTPRequest';
import {Layout, Row, Col, Rate, Tag, Button, Icon} from 'antd';

class BookDetail extends Component {
	state = {
		book : [],
	}

	componentDidMount() {
		ClientHTTPRequest.get(this.props.match.params.id, (book) => {
			this.setState({book: JSON.parse(book)})
		})
	}

	render() {
		const {book} = this.state;
		return(
			<Layout>
				<Row className="book-detail" type="flex" align='middle'>
					<Col md={6}><img src={book.cover} alt="description" style={{width: '100%'}}/></Col>
					<Col md={16} className="book-content">
						<h2>{book.name}</h2>
						<Row className="author-section" type="flex" align="middle">
							<Col md={4}><img src={book.cover} className='author-img' alt="description" /></Col>
							<Col md={6}><span><strong>{book.author}</strong></span></Col>
						</Row>
						<Row className="rating-section" type="flex" align='middle'>
							<Col md={6}><Rate /></Col>
							<Col md={6}><Icon type="share-alt" />&emsp;<span><strong>6996 review</strong></span></Col>
						</Row>
						<p dangerouslySetInnerHTML={{__html: book.description}}></p>
						<br />
						<p><strong>ISBN: {book.isbn}</strong></p>
						<p><strong>Publisher: {book.provider}</strong></p>
						<p><strong>Quantity: {book.quantity}</strong></p>
						<p><strong>Borrower: {book.borrower}</strong></p>
						<div className="category-tag">
							<span><strong>Category: </strong></span>
							<Tag color="blue">Art</Tag>
							<Tag color="purple">Business</Tag>
							<Tag color="orange">Ebooks</Tag>
						</div>
						<div>
							<Button type='primary' size='large'>Add to read</Button>
							<Button type='default' size='large'>Preview</Button>
						</div>
					</Col>
				</Row>
			</Layout>
		)
	}
}

export default BookDetail;