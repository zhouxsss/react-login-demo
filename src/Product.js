import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Category from './components/category';
import Nav from './components/nav';
import './product.css'


class Product extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const authInfo = this.props.authInfo;
        return (
            <div>
              {authInfo.userName}
              <Nav/>

              <Switch>
                <Route path="/product/:category" component={Category}/>
              </Switch>
            </div>
        );
    }
}

export default Product;
