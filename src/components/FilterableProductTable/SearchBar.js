import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input placeholder="Search..."
               value={this.props.filterText}
               onChange={this.props.filterTextChanged} />

        <label>
          <input type='checkbox'
                 defaultChecked={this.props.inStockOnly}
                 onChange={this.props.inStockChanged} /> Only show products in stock
        </label>
      </div>
    );
  }
}