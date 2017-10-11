import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

const data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Clocks</h2>
          <Clock />
          <Clock tz='America/Los_Angeles'/>
          <Clock tz='Asia/Tokyo'/>
        </div>

        <div>
          <h2>Product Table</h2>
          <FilterableProductTable data={data} />
        </div>
      </div>
    );
  }
}

export default App;
