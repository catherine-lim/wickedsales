import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    const paramId = this.props.viewParamsid;
    fetch(`/api/products.php?id= ` + paramId)
      .then(response => response.json())
      .then(data => this.setState({ product: data }));
  }
  render() {
    if (this.state.product !== null) {
      return (
        <React.Fragment>
          <button type="button" className="backbutton"
            onClick={() => this.props.productView('catalog', {})}>Back to Catalog</button>

          <div key={this.state.product.id} className="container">

            <img src= {this.state.product.image} className="card-img" />
            <div className="card-body">
              <h5 className="card-title">{this.state.product.name}</h5>
              <p className="card-text">${(this.state.product.price / 100).toFixed(2)}</p>
              <p className="card-text">{this.state.product.shortDescription}</p>

              <button type="button"
                onClick={() => this.props.addTocart(this.state.product)}>Add to Cart</button>
            </div>
            <p className="longdescription card-text">{this.state.product.longDescription}</p>
          </div>

        </React.Fragment>
      );
    }
    return null;
  }
}
