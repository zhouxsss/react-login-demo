import React, { Component } from 'react';
import { Tabs } from 'antd';


class Product extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.location.state)
        const authInfo = this.props.authInfo;
        return (
            <div>{authInfo.userName}</div>
        );
    }
}

export default Product;
