import { connect } from 'react-redux'
import { fetchBook } from '../actions'
import Book from '../components/Book'

const mapStateToProps = (state) => ({
	book: state.bookDetail.book
})

const mapDispatchToProps = (dispatch) => {
	return ({
		getBook: (id) => { dispatch(fetchBook(id)) }
	})
}

const BookDetail = connect(
	mapStateToProps,
	mapDispatchToProps
)(Book)

export default BookDetail