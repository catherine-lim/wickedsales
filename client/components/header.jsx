import React from 'react';

function Header(props) {
  return (
    <React.Fragment>
      <nav className="header navbar navbar-light bg-dark">
        <h2> Wicked Sales
          <i className="fas fa-cat"></i>
        </h2>
        <p className="cart">Cart {props.cartItemCount}</p>
        <i className="fas fa-shopping-cart fa-3x"></i>
      </nav>
    </React.Fragment>
  );
}

export default Header;
