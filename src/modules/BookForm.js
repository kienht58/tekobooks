import React, {Component} from 'react';
import SingleInput from './formelems/SingleInput';
import TextArea from './formelems/TextArea';
import ClientHTTPRequest from './ClientHTTPRequest';

class BookForm extends Component {

	state = {
		name: '',
		isbn: '',
		cover: '',
		author: '',
		pages: 0,
		description: '',
	}

	componentWillMount() {
		if(this.props.match.params.idx) {
			ClientHTTPRequest.get(this.props.match.params.idx, (book) => {
				book = JSON.parse(book);
				this.setState({
					name: book.name,
					isbn: book.isbn,
					cover: book.cover,
					author: book.author,
					pages: book.pages,
					description: book.description,
				})
			})
		}
	}

	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			name: this.state.name,
			isbn: this.state.isbn,
			cover: this.state.cover,
			author: this.state.author,
			pages: this.state.pages,
			'description': this.state.description,
		}

		if(this.props.match.params.idx) {
			ClientHTTPRequest.post(this.props.match.params.idx, formPayload, (res) => {
				//do post stuff
				console.log(res);
			})
		} else {
			ClientHTTPRequest.post(formPayload, (res) => {
				console.log(res);
			})
		}
		

		this.handleClearForm(e);
	}

	handleClearForm(e) {
		e.preventDefault();

		this.setState({
			name: '',
			isbn: '',
			cover: '',
			author: '',
			pages: 0,
			description: '',
		})
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value
		})
	}

	handleISBNChange(e) {
		this.setState({
			isbn: e.target.value
		})
	}

	handleCoverChange(e) {
		this.setState({
			cover: e.target.value
		})
	}

	handleAuthorChange(e) {
		this.setState({
			author: e.target.value
		})
	}

	handlePagesChange(e) {
		this.setState({
			pages: e.target.value
		})
	}

	handleDescriptionChange(e) {
		this.setState({
			description: e.target.value
		})
	}

	render() {
		return (
			<form className="container" onSubmit={(event) => this.handleFormSubmit(event)}>
				<h5>Create new Book entry</h5>
				<SingleInput 
					inputType={'text'}
					title={'Book Title'}
					name={'name'}
					controlFunc={(event) => this.handleNameChange(event)}
					content={this.state.name}
					placeholder={"Book title"}
				/>
				<SingleInput 
					inputType={'text'}
					title={'ISBN'}
					name={'isbn'}
					controlFunc={(event) => this.handleISBNChange(event)}
					content={this.state.isbn}
					placeholder={"0123456789012"}
				/>
				<SingleInput 
					inputType={'text'}
					title={'Book Cover'}
					name={'cover'}
					controlFunc={(event) => this.handleCoverChange(event)}
					content={this.state.cover}
					placeholder={"Cover"}
				/>
				<SingleInput 
					inputType={'text'}
					title={"Book author"}
					name={'author'}
					controlFunc={(event) => this.handleAuthorChange(event)}
					content={this.state.author}
					placeholder={"Kien dzzzzz"}
				/>
				<SingleInput 
					inputType={'number'}
					title={'Book pages'}
					name={'pages'}
					controlFunc={(event) => this.handlePagesChange(event)}
					content={this.state.pages}
					placeholder={"69"}
				/>
				<TextArea 
					title={'Book description'}
					rows={5}
					resize={true}
					content={this.state.description}
					name={'description'}
					controlFunc={(event) => this.handleDescriptionChange(event)}
					placeholder={'A beautiful Book!'}
				/>
				<input
					type="submit"
					value="Submit" />
			</form>
		)
	}
}

export default BookForm;