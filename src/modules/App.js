import React, { Component } from 'react';
import '../App.css';
import BookSearch from './BookSearch';
import BookList from './BookList';
import BookDetail from './BookDetail';
import BookForm from './BookForm';
import ClientHTTPRequest from './ClientHTTPRequest';
import {Link, Route} from 'react-router-dom';
import { Layout, Menu, Row } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
	state = {
		bookList: [],
	}

	componentWillMount() {
		ClientHTTPRequest.index(1, 8, (books) => {
			this.setState({bookList: JSON.parse(books).books})
		})
	}

	componentDidMount() {
		window.onpopstate = (e) => {
			this.forceUpdate()
		}
	}

	addBook = (book) => {
		const newBooks = this.state.bookList.concat(book);
		this.setState({bookList: newBooks});
	}

	render() {
		return (
			<Layout>
		    <Header className="header">
		      <div className="logo" />
		      <Menu
		        mode="horizontal"
		        defaultSelectedKeys={['2']}
		        style={{ lineHeight: '64px' }}
		      >
		        <Menu.Item key="1" className="logo">TEKOBOOKS</Menu.Item>
		        <Menu.Item key="2"><Link to="/">Book list</Link></Menu.Item>
		        <Menu.Item key="3"><Link to="/create">Add new Book</Link></Menu.Item>
		        <Menu.Item key="4" style={{float: 'right'}}>Login</Menu.Item>
		      </Menu>
		    </Header>
		    <Content>
		      <Row style={{padding: '50px 0', background: '#FAFAFA'}}>
		      	<BookSearch
							onBookClick={this.addBook}
						/>
		      </Row>
		      <Layout style={{ padding: '0 50px' }}>
		        <Route
		        	exact path='/'
		        	render={(props) => (
		        		<BookList
		        			{...props}
		        			data={{books: this.state.bookList}}
		        		/>
		        	)} 
		        />
		        <Route
		        	path='/book/:id' component={BookDetail}
		        />
		        <Route
		        	exact path='/create' component={BookForm}
		        />
		        <Route
		        	path='/update/:id' component={BookForm}
		        />
		      </Layout>
		    </Content>
		    <Footer style={{ textAlign: 'center', background: '#242729', color: 'white'}}>
		      Tekobooks © 2017 TEKO
		    </Footer>
		  </Layout>
		)
	}
}

export default App;