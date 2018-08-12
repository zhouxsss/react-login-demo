import React, { Component } from 'react';


class Product extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const authInfo = this.props.authInfo;
        return (
            <div>{authInfo.userName}</div>
        );
    }
}

export default Product;
