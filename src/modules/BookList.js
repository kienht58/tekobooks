import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon, Row, Rate } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class BookList extends Component {
	state = {
		books: [],
	}

	componentWillReceiveProps(nextProps) {
		this.setState({books: nextProps.data.books});
	}

	removeBookItem = (index) => {
		const filteredBook = this.state.books.filter(
			(item, idx) => index !== idx,
		);

		this.setState({books: filteredBook});
	}

	render() {
		const {books} = this.state;
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
		              <a className="btn btn-xs btn-success">Add to Read</a>
		          </div>
		      </div>
		  </div>
		))

		return(
			<Layout>
			<Sider width={200}>
		        	<p>CATEGORIES</p>
		          <hr />
		          <Menu
		            mode="inline"
		            defaultSelectedKeys={['1']}
		            defaultOpenKeys={['sub1']}
		            style={{ height: '100%', border: 'none' }}
		          >
		            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
		              <Menu.Item key="1">option1</Menu.Item>
		              <Menu.Item key="2">option2</Menu.Item>
		              <Menu.Item key="3">option3</Menu.Item>
		              <Menu.Item key="4">option4</Menu.Item>
		            </SubMenu>
		            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
		              <Menu.Item key="5">option5</Menu.Item>
		              <Menu.Item key="6">option6</Menu.Item>
		              <Menu.Item key="7">option7</Menu.Item>
		              <Menu.Item key="8">option8</Menu.Item>
		            </SubMenu>
		            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
		              <Menu.Item key="9">option9</Menu.Item>
		              <Menu.Item key="10">option10</Menu.Item>
		              <Menu.Item key="11">option11</Menu.Item>
		              <Menu.Item key="12">option12</Menu.Item>
		            </SubMenu>
		          </Menu>
		        </Sider>
		        <Content>
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
		        </Content>
			</Layout>
		)
	}	
}

export default BookList;