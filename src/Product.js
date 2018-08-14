import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Category from './components/category';
import Nav from './components/nav';
import './product.css'


class Product extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const authInfo = this.props.authInfo;
    return (
      <div>
        Welcome, {authInfo.userName}
        <div>
          <Nav/>
          <Switch>
            <Route path="/product/:category/:subcategory" component={Category}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Product;
