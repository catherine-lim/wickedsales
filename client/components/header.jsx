import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="header navbar navbar-light bg-dark">
          <h2> Wicked Sales

            <i className="fas fa-cat"></i>
          </h2>
        </nav>
      </React.Fragment>
    );
  }
}
