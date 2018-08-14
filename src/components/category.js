import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.category}
        >
        {this.props.match.params.subcategory}
      </div>
    )
  }
}

export default Category;