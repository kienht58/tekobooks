import React, {Component} from 'react';
import {Icon, Input, AutoComplete} from 'antd';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = [
  {
    title: "Book type 1",
    children: [
      {
        title: "Book title 1",
        author: "Author 1"
      },
      {
        title: "Book title 2",
        author: "Author 2"
      },
    ]
  },
  {
    title: "Book type 2",
    children: [
      {
        title: "Book title 3",
        author: "Author 3"
      },
      {
        title: "Book title 4",
        author: "Author 4"
      },
    ]
  }
]

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{float: 'right'}}
        href="https://www.google.com/search?q=adventure"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </span>
  );
}

const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className="certain-search-item-author">{opt.author}</span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
    <a href="#">
      See more result
    </a>
  </Option>
]);

class SearchBar extends Component {
	render() {
		return (
			<div className="certain-category-search-wrapper">
        <p><strong>Explore books</strong></p>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{width: 300}}
          size="large"
          style={{width: '400px'}}
          dataSource={options}
          placeholder="input here"
          optionLabelProp="value"
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
      </div>
		);
	}
}

export default SearchBar;