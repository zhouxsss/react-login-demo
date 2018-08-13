import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.category}
      </div>
    )
  }
}

export default Category;