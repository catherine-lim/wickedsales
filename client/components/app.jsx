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
      }
    };
    this.setView = this.setView.bind(this);
  }
  setView(name, params) {
    this.setState({ view: {
      name: name,
      params: params
    } });
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
