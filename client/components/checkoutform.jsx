import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    const paramId = this.props.params.view.params.id;
    fetch(`/api/products.php?id= ` + paramId)
      .then(response => response.json())
      .then(data => this.setState({ product: data }));
  }
}
