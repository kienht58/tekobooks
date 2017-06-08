import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon, Row, Rate } from 'antd'
const { Content, Sider } = Layout

class List extends Component {
	componentDidMount() {
		
	}

	render() {
		const {books} = this.props
		console.log(this.props)
		return (
			<Layout>
				<Sider style={{width: '20%', padding: '57px 0'}}>
				  <p><strong>CATEGORIES</strong></p>
				  <hr />
				  <Menu
				    mode="inline"
				    defaultSelectedKeys={['1']}
				    defaultOpenKeys={['sub1']}
				    style={{ height: '100%', border: 'none' }}
				  >
				    <Menu.Item key="1">Art</Menu.Item>
				    <Menu.Item key="2">Biography</Menu.Item>
				    <Menu.Item key="3">Business</Menu.Item>
				    <Menu.Item key="4">Childrens</Menu.Item>
				    <Menu.Item key="5">Christian</Menu.Item>
				    <Menu.Item key="6">Classics</Menu.Item>
				    <Menu.Item key="7">Comedy</Menu.Item>
				    <Menu.Item key="8">Comics</Menu.Item>
				    <Menu.Item key="9">Cookbooks</Menu.Item>
				    <Menu.Item key="10">Crime</Menu.Item>
				    <Menu.Item key="11">Ebooks</Menu.Item>
				    <Menu.Item key="12">Fantasy</Menu.Item>
				    <Menu.Item key="13">Fiction</Menu.Item>
				    <Menu.Item key="14">Graphic Novel</Menu.Item>
				    <Menu.Item key="15">Historical Fiction</Menu.Item>
				    <Menu.Item key="16">History</Menu.Item>
				    <Menu.Item key="17">Horror</Menu.Item>
				    <Menu.Item key="18">Manga</Menu.Item>
				    <Menu.Item key="19">Memoir</Menu.Item>
				  </Menu>
				</Sider>
			  <Content style={{padding: '0 50px'}}>
			   	{(books && books.length) ? (
				    <Row className="list-content">
							<div className="well well-sm filter-choice">
								<div className="btn-group">
									<Icon type="bars" className="btn btn-lg list"/>
									<Icon type="appstore-o" className="btn btn-lg grid"/>
								</div>
							</div>
							<div id="products" className="row list-group is-table-row">
								{books.map((book, idx) => (
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
								))}
							</div>
						</Row>
			   	) : (
			    	<div id="loader"></div>
			   	)}      
			  </Content>
			</Layout>
		)
	}

}

export default List