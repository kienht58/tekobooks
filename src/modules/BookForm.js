import React, {Component} from 'react';
import ClientHTTPRequest from './ClientHTTPRequest';
import { Form, Input, InputNumber, Button } from 'antd';
const FormItem = Form.Item;

class NormalForm extends Component {

	componentDidMount() {
		if(this.props.match.params.idx) {
			ClientHTTPRequest.get(this.props.match.params.idx, (book) => {
				book = JSON.parse(book);
				this.props.form.setFields({
					name: {
						value: book.name,
						errors: [new Error('could not retrieve name')]
					},
					isbn: {
						value: book.isbn,
						errors: [new Error('could not retrieve isbn')]
					},
					author: {
						value: book.author,
						errors: [new Error('could not retrieve isbn')]
					},
					pages: {
						value: book.pages,
						errors: [new Error('could not retrieve isbn')]
					},
					description: {
						value: book.description,
						errors: [new Error('could not retrieve isbn')]
					},
				})
			})
		}
	}

	checkISBN = (rule, value, callback) => {
		if(!value || !(value.length === 10 || value.length === 13)) {
			callback('ISBN must have 10 or 13 number!');
		} else {
			callback();
		}
	}

	checkPages = (rule, value, callback) => {
		if(value && value > 0) {
			callback();
		} else {
			callback('Page numbers must not be negative!');
		}
	}

	checkYear = (rule, value, callback) => {
		if(value && (value > 2017 || value < 0)) {
			callback('Year must be in range of 0 -> 2017');
		} else {
			callback();
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if(!err) {
				console.log('Receive value of form: ', values);
			}
		})
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

		return (
			<div className="container">
				<h2 className="form-title">CREATE NEW BOOK</h2>
				<Form onSubmit={this.handleSubmit}>
						<FormItem
							{...formItemLayout}
							label="Book name"
							hasFeedback
						>
							{getFieldDecorator('name', {
		            rules: [{
		              required: true, message: 'Please input the name!',
		            }],
		          })(
		            <Input />
		          )}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="ISBN"
							hasFeedback
						>
							{getFieldDecorator('isbn', {
								rules: [
									{required: true, message: 'Please input the isbn!'},
									{validator: this.checkISBN}
								], 
							})(
								<Input />
							)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Book cover"
							hasFeedback
						>
							{getFieldDecorator('cover', {
								rules: [{required: true, message: 'Please input the book cover link!'}], 
							})(
								<Input />
							)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Book author"
							hasFeedback
						>
							{getFieldDecorator('author', {
								rules: [{required: true, message: 'Please input the author!'}], 
							})(
								<Input />
							)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Book pages"
							hasFeedback
						>
							{getFieldDecorator('pages', {
								rules: [{required: true, message: 'Please input the page number!'},
												{validator: this.checkPages}], 
							})(
								<InputNumber />
							)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Description"
							hasFeedback
						>
							{getFieldDecorator('description', {
								rules: [], 
							})(
								<Input />
							)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Publish year"
							hasFeedback
						>
							{getFieldDecorator('public_year', {
								rules: [{required: true, message: 'Please input the publish year!'},
												{validator: this.checkYear}], 
							})(
								<InputNumber />
							)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Status"
							hasFeedback
						>
							{getFieldDecorator('status', {
								rules: [{required: true, message: 'Please input the book status!'}], 
							})(
								<Input />
							)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Goodreads rating"
							hasFeedback
						>
							{getFieldDecorator('goodreads_rating', {
								rules: [{required: true, message: 'Please input the rating!'}], 
							})(
								<Input />
							)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Goodreads link"
							hasFeedback
						>
							{getFieldDecorator('goodreads_link', {
								rules: [{required: true, message: 'Please input the link!'}], 
							})(
								<Input />
							)}
						</FormItem>
						<FormItem {...tailFormItemLayout}>
	          <Button type="primary" htmlType="submit" size="large">Create new book</Button>
	        </FormItem>
				</Form>
			</div>
		)
	}
}

const BookForm = Form.create()(NormalForm);

export default BookForm;