import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon, Row, Rate } from 'antd'
const { Content, Sider } = Layout

class List extends Component {
	componentDidMount() {
		const {getList} = this.props
		getList(1, 10)
	}

	render() {
		const {books} = this.props
		return (
			<Layout>
				<Sider
					breakpoint="sm"
					collapsedWidth="0"
					style={{width: '20%', padding: '57px 0'}}
				>
				  <p><strong>CATEGORIES</strong></p>
				  <hr />
				  <Menu
				    mode="inline"
				    defaultSelectedKeys={['1']}
				    defaultOpenKeys={['sub1']}
				    style={{ height: '100%', border: 'none' }}
				  >
				    <Menu.Item key="1">
				    	<span className="nav-text">Art</span>
				    </Menu.Item>
				    <Menu.Item key="2">
				    	<span className="nav-text">Biography</span>
				    </Menu.Item>
				    <Menu.Item key="3">
				    	<span className="nav-text">Business</span>
				    </Menu.Item>
				    <Menu.Item key="4">
				    	<span className="nav-text">Childrens</span>
				    </Menu.Item>
				    <Menu.Item key="5">
				    	<span className="nav-text">Christian</span>
				    </Menu.Item>
				    <Menu.Item key="6">
				    	<span className="nav-text">Classics</span>
				    </Menu.Item>
				    <Menu.Item key="7">
				    	<span className="nav-text">Comedy</span>
				    </Menu.Item>
				    <Menu.Item key="8">
				    	<span className="nav-text">Comics</span>
				    </Menu.Item>
				    <Menu.Item key="9">
				    	<span className="nav-text">Cookbooks</span>
				    </Menu.Item>
				    <Menu.Item key="10">
				    	<span className="nav-text">Crime</span>
				    </Menu.Item>
				    <Menu.Item key="11">
				    	<span className="nav-text">Ebooks</span>
				    </Menu.Item>
				    <Menu.Item key="12">
				    	<span className="nav-text">Fantasy</span>
				    </Menu.Item>
				    <Menu.Item key="13">
				    	<span className="nav-text">Fiction</span>
				    </Menu.Item>
				    <Menu.Item key="14">
				    	<span className="nav-text">Graphic Novel</span>
				    </Menu.Item>
				    <Menu.Item key="15">
				    	<span className="nav-text">Historical Fiction</span>
				    </Menu.Item>
				    <Menu.Item key="16">
				    	<span className="nav-text">History</span>
				    </Menu.Item>
				    <Menu.Item key="17">
				    	<span className="nav-text">Horror</span>
				    </Menu.Item>
				    <Menu.Item key="18">
				    	<span className="nav-text">Manga</span>
				    </Menu.Item>
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
			    	<div className="loader"></div>
			   	)}
			  </Content>
			</Layout>
		)
	}

}

export default List
