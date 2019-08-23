import React from 'react';
import Header from './header';
import Productlist from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Productlist />

      </React.Fragment>
    );
  }
}
