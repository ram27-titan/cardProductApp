import { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 300px;
  background-color: lightgreen;
  overflow: auto;
  margin: auto;
  margin-top: 50px;
`;
const Link = styled.a`
  float: right;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 24px;
`;

class Bar extends Component {
  render() {
    return (
      <Nav>
        <Link href="#">{this.props.value}</Link>
      </Nav>
    );
  }
}

export default Bar;
