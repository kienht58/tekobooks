import React, {Component} from 'react';
import Sidebar from './Sidebar';
import {Row, Col} from 'antd';
import BookCard from './BookCard';

class Content extends Component {
	render() {
		return (
			<div className="content-section">
				<Row>
					<Col md={4} offset={1}>
						<Sidebar />
					</Col>
					<Col md={16}>
						<Row type="flex" justify="space-around" className="bookcard-row">
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
						</Row>
						<Row type="flex" justify="space-around" className="bookcard-row">
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
						</Row>
						<Row type="flex" justify="space-around" className="bookcard-row">
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
						</Row>
						<Row type="flex" justify="space-around" className="bookcard-row">
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
							<Col md={4}><BookCard /></Col>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Content;