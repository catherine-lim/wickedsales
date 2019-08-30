import React from 'react';
import Productlistitem from './product-list-item';

export default class Productlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch(`/api/products.php`)
      .then(response => response.json())
      .then(response => {
        this.setState({ products: response });
      });
  }

  render() {
    const product = this.state.products.map(product => {
      return (
        <Productlistitem key={product.id}
          id = {product.id}
          name = {product.name}
          price = {product.price}
          image = {product.image}
          shortDescription = {product.shortDescription}
          setView={this.props.setView}/>
      );
    });
    return (
      <div className="row">
        <div className="col col-sm">
          {product}
        </div>

      </div>
    );
  }
}
