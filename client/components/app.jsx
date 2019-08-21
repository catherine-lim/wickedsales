import React from 'react';
import Header from './header';
import Productlistitem from './product-list-item';
import Productlist from './product-list';

export default class App extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <Productlistitem />
        <Productlist />
      </div>
    );
  }
}
