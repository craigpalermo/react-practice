import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filterText, inStockOnly } = this.props;
    const rows = this.props.data
      .filter(x => inStockOnly ? x.stocked : true )
      .filter(x => x.name.includes(filterText))
      .reduce((acc, cur) => {
        if (!acc[cur.category]) {
          acc[cur.category] = [cur];
        } else {
          acc[cur.category].push(cur);
        }
        return acc;
      }, {});

    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {
          Object.keys(rows).map((category) => {
            return ([
              <ProductCategoryRow category={category} />,
              rows[category].map((product) => {
                return <ProductRow product={product} />;
              })
            ]);
          })
        }
        </tbody>
      </table>
    );
  }
}