import React, {Component} from 'react'

import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'

class BookDetail extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col xs={3} md={2} offset={2}>
                            <img src="http://123emoji.com/wp-content/uploads/2016/04/10_result1.png" alt="doraemon"/>
                        </Col>
                        <Col xs={6} md={8}>
                            <h2>DORAEMON</h2>
                            <h3>Fujiko F. Fujio</h3>
                            <p>Doraemon, Nobita, blablabla</p>
                            <div>
                                <p>Borrower: a, b, c</p>
                            </div>
                            <button>Preview</button>
                            <button>borrow</button>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}

export default BookDetail
