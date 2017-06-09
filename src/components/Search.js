import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Icon, Button, Input, AutoComplete, Rate } from 'antd';
const Option = AutoComplete.Option;

class Search extends Component {

	handleSearch = (query) => {
		if(query !== '') {
			const {search} = this.props
			search(query)
		} else {
			const {clrSearch} = this.props
			clrSearch()
		}
	}

	render() {
		const {books} = this.props
		return (
			<div className="global-search-wrapper">
				<p><strong>SEARCH FOR BOOKS</strong></p>
				<AutoComplete
					className="global-search"
					size="large"
					style={{width: '100%'}}
					dataSource={books && books.map((item) => (
						<Option
							key={item.id}
						>
							<Link to={'/book/' + item.id}>
								<Row>
									<Col xs={6}>
										<img src={item.cover} alt="description" />
									</Col>
									<Col xs={18}>
										<p className="global-search-item-title">{item.name}</p>
										<p className="global-search-item-author">{item.author}</p>
										<p className='global-search-item-review'>6969 review</p>
										<Rate />
									</Col>
								</Row>
							</Link>
						</Option>
					))}
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

export default Search;