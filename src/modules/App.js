import React, { Component } from 'react';
import '../App.css';
import BookSearch from './BookSearch';
import BookList from './BookList';
import ClientHTTPRequest from './ClientHTTPRequest';
import {Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Row } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
	state = {
		bookList: [],
	}

	componentDidMount() {
		ClientHTTPRequest.index(1, 10, (books) => {
			this.setState({bookList: JSON.parse(books).books})
		})
	}

	removeBookItem = (index) => {
		const filteredBook = this.state.bookList.filter(
			(item, idx) => index !== idx,
		);
		this.setState({bookList: filteredBook});
	}

	addBook = (book) => {
		const newBooks = this.state.bookList.concat(book);
		this.setState({bookList: newBooks});
	}

	render() {
		const { bookList } = this.state;

		return (
			<Layout>
		    <Header className="header">
		      <div className="logo" />
		      <Menu
		        mode="horizontal"
		        defaultSelectedKeys={['2']}
		        style={{ lineHeight: '64px' }}
		      >
		        <Menu.Item key="1">TEKOBOOKS</Menu.Item>
		        <Menu.Item key="2"><Link to="/">Book list</Link></Menu.Item>
		        <Menu.Item key="3"><Link to="/create">Add new Book</Link></Menu.Item>
		        <Menu.Item key="4" style={{float: 'right'}}>Login</Menu.Item>
		      </Menu>
		    </Header>
		    <Content style={{ padding: '0 50px' }}>
		      <Row style={{padding: '50px 0'}}>
		      	<BookSearch
							onBookClick={this.addBook}
						/>
		      </Row>
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
		        <Content style={{ minHeight: 280 }}>
		        	<Row>
			        	<Icon type="bars" />
								<Icon type="appstore-o" />
		          </Row>
		          <Row>
			          <BookList 
									books={bookList}
									onDeleteClick={this.removeBookItem}
								/>
							</Row>
		        </Content>
		      </Layout>
		    </Content>
		    <Footer style={{ textAlign: 'center' }}>
		      Tekobooks © 2017 TEKO
		    </Footer>
		  </Layout>
		)
	}
}

export default App;