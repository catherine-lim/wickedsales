import React from 'react';
import Header from './header';
import Productlist from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Productlist />
        <ProductDetails />
      </React.Fragment>
    );
  }
}
