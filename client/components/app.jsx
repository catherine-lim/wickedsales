import React from 'react';
import Header from './header';
import Productlist from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartsummary';
import CheckoutForm from './checkoutform';

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
    this.placeOrder = this.placeOrder.bind(this);

  }
  componentDidMount() {
    this.getCartItems();
  }
  setView(name, params) {
    this.setState({ view: {
      name: name,
      params: params
    } });
  }
  placeOrder(userObj) {
    const order = {
      name: userObj.name,
      creditCard: userObj.creditCard,
      shippingAddress: userObj.shippingAddress,
      cart: this.state.cart
    };

    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => this.setState({ cart: [] }))
      .then(data => this.setState({ view: {
        name: 'catalog',
        params: {}
      } }));
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(data => this.setState({ cart: data }));
  }

  addToCart(product) {
    fetch('/api/cart.php', {
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
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <Productlist setView={this.setView} />
        </React.Fragment>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <React.Fragment>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductDetails setView={this.setView} params={this.state} addTocart={this.addToCart}/>
        </React.Fragment>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <React.Fragment>
          <Header setView={this.setView} cartItemCount={this.state.cart.length}/>
          <CartSummary setView={this.setView} cartItem={this.state.cart}/>
        </React.Fragment>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <React.Fragment>
          <Header setView={this.setView} cartItemCount={this.state.cart.length}/>
          <CheckoutForm setView={this.setView} cartItem={this.state.cart} placeOrder={this.placeOrder}/>
        </React.Fragment>
      );
    }

  }
}
