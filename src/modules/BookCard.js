import React, {Component} from 'react';
import {Card, Rate, Button, Icon} from 'antd';

class BookCard extends Component {
	render() {
		return (
			<Card style={{width: 300, border: 'none'}} bodyStyle={{padding: 0}} bordered="true">
				<div className="custom-image">
					<img src="http://khosach.info/store/comic/doremon/doremon__001/doremon__001_001.jpg"/>
				</div>
				<div className="custom-card">
					<Rate />
					<h3>Doraemon 1</h3>
					<p>Fujiko F Fujio</p>
					<Button><Icon type="book" />Add to read</Button>
				</div>
			</Card>
		);
	}
}

export default BookCard;