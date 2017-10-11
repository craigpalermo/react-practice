import React from 'react';

export default class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <tr colspan='2'><strong>{this.props.category}</strong></tr>;
  }
}