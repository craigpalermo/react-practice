import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
    };

    this.filterTextChanged = this.filterTextChanged.bind(this);
    this.inStockChanged = this.inStockChanged.bind(this);
  }

  filterTextChanged(e) {
    this.setState({
      filterText: e.target.value,
    });
  }

  inStockChanged(e) {
    this.setState({
      inStockOnly: e.target.checked,
    });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   inStockOnly={this.state.inStockOnly}
                   filterTextChanged={this.filterTextChanged}
                   inStockChanged={this.inStockChanged} />

        <ProductTable data={this.props.data} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}