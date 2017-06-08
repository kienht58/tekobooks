import { connect } from 'react-redux'
import { fetchList } from '../actions'
import List from '../components/List'

const mapStateToProps = (state) => ({
	books: state.books.books
})

const mapDispatchToProps = (dispatch) => {
	return ({
		getList: () => {dispatch(fetchList)}
	})
}

const BookList = connect(
	mapStateToProps,
	mapDispatchToProps
)(List)

export default BookList