import React, { Component } from 'react'
import BookSearch from '../components/BookSearch'
import BookList from '../components/BookList'
import BookDetail from '../components/BookDetail'
import {Link, Route} from 'react-router-dom'
import { Layout, Menu, Row } from 'antd'
import { connect } from 'react-redux'
import { fetchList } from '../actions'
const { Header, Content, Footer } = Layout

class App extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const {dispatch} = this.props
		dispatch(fetchList(1, 10))
	}

	componentDidUpdate(prevProps) {
		console.log(this.props)
	}

	render() {
		const { books } = this.props
		return (
			<Layout>
		    <Header className="header">
		      <div className="logo" />
		      <Menu
		        mode="horizontal"
		        defaultSelectedKeys={['2']}
		        style={{ lineHeight: '64px' }}
		      >
		        <Menu.Item key="1" className="logo"><Link to="/">TEKOBOOKS</Link></Menu.Item>
		        <Menu.Item key="2"><Link to="/">Book list</Link></Menu.Item>
		        <Menu.Item key="3"><Link to="/create">Add new Book</Link></Menu.Item>
		        <Menu.Item key="4" style={{float: 'right'}}>Login</Menu.Item>
		      </Menu>
		    </Header>
		    <Content>
		      <Row style={{padding: '50px 0', background: '#FAFAFA'}}>
		      	<BookSearch />
		      </Row>
		      <Layout style={{ padding: '0 50px' }}>
		        <Route
		        	exact path='/'
		        	render={(props) => (
		        		<BookList
		        			{...props}
		        			data={{books: books}}
		        		/>
		        	)} 
		        />
		        <Route
		        	path='/book/:id' component={BookDetail}
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

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps)(App)