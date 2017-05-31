import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ClientHTTPRequest from './ClientHTTPRequest';
import { Row, Col, Icon, Button, Input, AutoComplete, Rate } from 'antd';
const Option = AutoComplete.Option;

class BookSearch extends Component {
	state = {
		books: [],
	}

	renderOption(item) {
		return (
			<Option
				key={item.id}
			>
				<Row>
					<Col xs={6}>
						<img src={item.cover} />
					</Col>
					<Col xs={18}>
						<p className="global-search-item-title">{item.name}</p>
						<p className="global-search-item-author">{item.author}</p>
						<p className='global-search-item-review'>6969 review</p>
						<Rate />
					</Col>
				</Row>
			</Option>
		)
	}

	handleSearch = (value) => {
		if(value == '') {
			this.setState({
				books: []
			})
		} else {
			ClientHTTPRequest.search(value, (books) => {
				this.setState({
					books: [JSON.parse(books)]
				})
			})
		}
	}

	render() {
		const {bookList} = this.state;
		return (
			<div className="global-search-wrapper">
				<p><strong>SEARCH FOR BOOKS</strong></p>
				<AutoComplete
					className="global-search"
					size="large"
					style={{width: '100%'}}
					dataSource={this.state.books.map(this.renderOption)}
					onSearch={this.handleSearch}
					placeholder="search here"
					optionLabelProp="text"
				>
					<Input
						suffix={(
							<Button className="search-btn" size="large" type="default">
								<Icon type="search" />
							</Button>
						)}
					/>
				</AutoComplete>
			</div>
		)
	}
}

export default BookSearch;