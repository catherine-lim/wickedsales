import React from 'react';

class Productlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  getProducts() {
    fetch(`/api/products.php`)
      .then(response => response.json())
      .then(response => {
        this.setState({ products: response });
      });
  }

}
export default Productlist;
