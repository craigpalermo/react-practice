import React from 'react';

export default class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { price, name } = this.props.product;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}