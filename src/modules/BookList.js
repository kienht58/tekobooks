import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Row, Rate, Icon} from 'antd';

class BookList extends Component {
	render() {
		const {books} = this.props;

		const bookCards = books.map((book, idx) => (
			<div 
				key={idx}
				className="item col-xs-2 col-lg-2"
			>
		      <div className="thumbnail">
		          <Link to={'/book/' + book.id}><img className="group list-group-image" src={book.cover} alt="" style={{width: "98px",height: "148px"}}/></Link>
		          <div className="caption">
		              <div className="row">
		              <p className="text-description" style={{display: 'none'}} dangerouslySetInnerHTML={{__html: book.description}}></p>
		              	<Rate />
		              </div>
		              <a className="btn btn-xs btn-success" href="#">Add to Read</a>
		          </div>
		      </div>
		  </div>
		))

		return(
			<Row className="list-content">
		    <div className="well well-sm filter-choice">
		        <div className="btn-group">
		           	<Icon type="bars" className="btn btn-lg list"/>
		            <Icon type="appstore-o" className="btn btn-lg grid"/>
		        </div>
		    </div>
		    <div id="products" className="row list-group is-table-row">
		        {bookCards}
		    </div>
		</Row>
		)
	}	
}

export default BookList;