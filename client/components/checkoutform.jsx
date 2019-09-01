import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    event.preventDefault();
    if (event.target.id === 'name') {
      this.setState({ name: event.target.value });
    } else if (event.target.id === 'creditCard') {
      this.setState({ creditCard: event.target.value });
    } else if (event.target.id === 'shippingAddress') {
      this.setState({ shippingAddress: event.target.value });
    }

  }
  handleSubmit(event) {
    event.preventDefault();
  }
  CartTotal() {
    var totalprice = 0;
    for (var i = 0; i < this.props.cartItem.length; i++) {
      totalprice += this.props.cartItem[i].price;
    }
    return totalprice;
  }
  render() {
    const carttotal = this.CartTotal();
    return (
      <React.Fragment>
        <div>
          <h3>Checkout</h3>
          <p> <strong> Order Total ${(carttotal / 100).toFixed(2)} </strong></p>

          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="name" className="form-control" placeholder="Name" />
            </div>

            <div className="form-group">
              <label>Credit Card Info</label>
              <input name="email" type="email" value={this.state.creditCard} onChange={this.handleChange} id="creditCard" className="form-control" placeholder="email@domain.com" />
            </div>

            <div className="form-group">
              <label>Shipping Address</label>
              <textarea type="text" value={this.state.shippingAddress} onChange={this.handleChange} id="shippingAddress" className="form-control" placeholder="Your Address" />
            </div>

          </form>
          <button type="button" className= "btn btn-link mt-4"
            onClick={() => this.props.setView('catalog', {})}> {'<'}  Continue Shopping </button>

          <button type="button" className="pobutton btn btn-primary"> Place Order</button>

        </div>

      </React.Fragment>
    );
  }
}
