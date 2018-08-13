import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    const navItem = [{"food": ["fruit", "vegetable"]}];
    return (
      <ul>
        <li><Link to="/product/fruit" >Fruit </Link></li>
        <li><Link to="/product/vegetable" >Vegetable </Link></li>
      </ul>
    )
  }
}

export default Nav;