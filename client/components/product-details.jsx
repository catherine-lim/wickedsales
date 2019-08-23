import React from 'react';

import Productlistitem from './product-list-item';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(response => response.json())
      .then(data => this.setState({ product: data }));
  }
  render() {
    if (this.state.product !== null) {
      return (
        <Productlistitem key={this.state.product.id}
          id = {this.state.product.id}
          name = {this.state.product.name}
          price = {this.state.product.price}
          image = {this.state.product.image}
          shortDescription = {this.state.product.shortDescription}/>
      );
    }
    return null;
  }
}
