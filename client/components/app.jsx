import React from 'react';
import Header from './header';
import Productlist from './product-list';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Productlist />

      </React.Fragment>
    );
  }
}
