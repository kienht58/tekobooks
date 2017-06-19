import { connect } from 'react-redux'
import { searchBook, clearSearch } from '../actions'
import Search from '../components/Search'

const mapStateToProps = (state) => ({
	books: state.searchedBooks.searchResult
})

const mapDispatchToProps = (dispatch) => {
	return ({
		search: (query) => { dispatch(searchBook(query)) },
		clrSearch: () => { dispatch(clearSearch()) }
	})
}

const BookSearch = connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)

export default BookSearch