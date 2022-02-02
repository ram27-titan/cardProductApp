import React from 'react';
import styled from 'styled-components';

const Qty = styled.p`
  font-size: 22px;
  width: 600px;
`;

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: darkslategrey;
  background-color: lightgreen;
  text-align: center;
  cursor: pointer;
  font-size: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

class Counter extends React.Component {
  state = {
    value: 0,
  };

  handlePlus = () => {
    this.setState({ value: this.state.value + 1 }, () => this.props.receiveValue(this.state.value));
  };

  handleMinus = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 }, () => this.props.receiveValue(this.state.value));
    }
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Button onClick={this.handleMinus}>-</Button>
        <Qty>{this.state.value}</Qty>
        <Button onClick={this.handlePlus}>+</Button>
      </div>
    );
  }
}

export default Counter;
