import React from 'react'
import '../App.css'
import BookSearch from '../containers/BookSearch'
import BookList from '../containers/BookList'
import BookDetail from '../containers/BookDetail'
import {Link, Route} from 'react-router-dom'
import { Layout, Menu, Row } from 'antd'
const { Header, Content, Footer } = Layout

const App = () => (
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
		    <Menu.Item key="3" style={{float: 'right'}}>Login</Menu.Item>
		  </Menu>
		</Header>
		<Content>
		  <Row style={{padding: '50px 0', background: '#FAFAFA'}}>
		    <BookSearch />
		  </Row>
		  <Layout style={{ padding: '0 50px' }}>
		    <Route
		      exact path='/'
		      component={BookList}
		    />
		    <Route
		      path='/book/:id' component={BookDetail}
		    />
		  </Layout>
		</Content>
		<Footer style={{ textAlign: 'center', background: '#242729', color: 'white', position: 'fixed', bottom: '0px', left: '0px', right: '0px' }}>
		      Tekobooks © 2017 TEKO
		</Footer>
	</Layout>
)

export default App
