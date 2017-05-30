import React, {Component} from 'react';
import ClientHTTPRequest from './ClientHTTPRequest';

class BookDetail extends Component {
	state = {
		book : [],
	}

	componentDidMount() {
		ClientHTTPRequest.get(this.props.match.params.id, (book) => {
			this.setState({book: book})
		})
	}

	render() {
		return <div>{this.state.book}</div>
	}
}

export default BookDetail;