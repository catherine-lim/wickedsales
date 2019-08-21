import React from 'react';
import Header from './header';
import Productlistitem from './product-list-item';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Header />
        <Productlistitem />
      </React.Fragment>
    );
  }
}
