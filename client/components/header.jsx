import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="header navbar navbar-light bg-dark">
          <h2> Wicked Sales
            <i className="fas fa-cat"></i>
          </h2>
          <p className="cart">Cart</p>
          <i className="fas fa-shopping-cart fa-3x"></i>
        </nav>
      </React.Fragment>
    );
  }
}
