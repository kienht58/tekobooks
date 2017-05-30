import React, {Component} from 'react';
import ClientHTTPRequest from './ClientHTTPRequest';

class BookSearch extends Component {
	state = {
		books: [],
		showRemoveIcon: false,
		searchValue: '',
	};

	handleSearchChange = (e) => {
		const value = e.target.value;

		this.setState({
			searchValue: value,
		});

		if(value === '') {
			this.setState({
				books: [],
				showRemoveIcon: false,
			});
		} else {
			this.setState({
				showRemoveIcon: 'true',
			});
		}

		ClientHTTPRequest.search(value, (books) => {
			this.setState({
				books: [JSON.parse(books)]
			})
		})
	}

	handleSearchCancel = () => {
		this.setState({
			books: [],
			showRemoveIcon: false,
			searchValue: '',
		});
	}

	render() {
		const {showRemoveIcon, books} = this.state;
		const removeIconStyle = showRemoveIcon ? {} : {visibility: 'hidden'};

		const bookRows = books.map((book, idx) => (
			<tr
				key={idx}
				onClick={() => this.props.onBookClick(book)}
			>
				<td>{book.name}</td>
			</tr>
		))

		return (
			<div id='food-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search books...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <i
                    className='remove icon'
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {bookRows}
          </tbody>
        </table>
      </div>
		)
	}
}

export default BookSearch;