import React from 'react';
import Bar from './Bar/bar';
import Product from './Product/product';

export default class Reusable extends React.Component {
  state = {
    value: 0,
  };
  handleValue = (data) => {
    this.setState({
      value: data,
    });
  };
  render() {
    return (
      <div>
        <Bar value={this.state.value} />
        <Product receiveValue={this.handleValue} />
      </div>
    );
  }
}
