import React from 'react';
import Header from './header';
import Productlist from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getCartItems = this.getCartItems.bind(this);

  }
  componentDidmount() {
    this.getCartItems();
  }
  setView(name, params) {
    this.setState({ view: {
      name: name,
      params: params
    } });
  }
  getCartItems() {
    fetch(`/api/cart.php`)
      .then(response => response.json())
      .then(data => this.setState({ cart: data }));
  }

  addToCart(product) {
    fetch(`/api/cart.php`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        const allItems = this.state.cart.concat(data);
        this.setState({ cart: allItems });

      });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <React.Fragment>
          <Header cartItemCount={this.state.cart.length}/>
          <Productlist productView={this.setView} />
        </React.Fragment>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <React.Fragment>
          <Header cartItemCount={this.state.cart.length}/>
          <ProductDetails productView={this.setView} params={this.state} addTocart={this.addToCart}/>
        </React.Fragment>
      );
    }

  }
}
