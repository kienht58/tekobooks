import React, {Component} from 'react'
import {Grid, Row, Col, Panel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class BookList extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={4} md={3}>
                        <Panel>
                            <Row>
                                <Link to='/book/1'>
                                    <img src="http://123emoji.com/wp-content/uploads/2016/04/10_result1.png" alt="doraemon
                                     style={{width: '94px', height: '144px'}}"/>
                                </Link>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default BookList
