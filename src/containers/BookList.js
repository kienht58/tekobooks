import { connect } from 'react-redux'
import { fetchList } from '../actions'
import List from '../components/List'

const mapStateToProps = (state) => ({
	books: state.books
})

const mapDispatchToProps = (dispatch) => {
	return ({
		getList: (page, limit) => {dispatch(fetchList(page, limit))}
	})
}

const BookList = connect(
	mapStateToProps,
	mapDispatchToProps
)(List)

export default BookList
