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
        params: {},
        cart: []
      }
    };
    this.setView = this.setView.bind(this);

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
      body: JSON.stringify(),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json());

  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <React.Fragment>
          <Header />
          <Productlist productView={this.setView}/>
        </React.Fragment>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <React.Fragment>
          <Header />
          <ProductDetails productView={this.setView} params={this.state}/>
        </React.Fragment>
      );
    }

  }
}
