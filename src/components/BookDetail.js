import React, {Component} from 'react'

import {Row, Jumbotron} from 'react-bootstrap'

class BookDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: [],
        }
    }

    componentWillMount() {
        const id = this.props.match.params.id
        const books = this.props.books

        var idx = this.binarySearch(books, id)

        this.setState({
            book: books[idx]
        })
    }

    binarySearch(arr, id) {
        var left = 0, right = arr.length, mid
        while(left < right) {
            mid = (left + right) >>> 1
            arr[mid]._id < id ? left = mid + 1: right = mid
        }

        return left
    }

    componentDidMount() {
        const db = this.props.db
        db.changes({
            live: true,
            since: 'now',
            include_docs: true
        }).on('change', change => {
            var doc = change.doc
            if(doc._id === this.state.book._id) {
                this.setState({
                    book: doc
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Row>
                        <img src="http://123emoji.com/wp-content/uploads/2016/04/10_result1.png" alt="doraemon"/>
                        <div className="loading">Coming soon</div>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}

export default BookDetail
