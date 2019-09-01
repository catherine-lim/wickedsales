import React from 'react';
import CartSummaryItem from './cartsummaryitem';

function CartSummary(props) {
  if (props.cartItem.length === 0) {
    return (
      <div>
        <button className= "btn btn-link mt-4" onClick= {() => props.setViewItem('catalog', {})}>
          {'<'}  Back to Catalog
        </button>
        <h5>My Cart</h5>
    No Items in your cart
      </div>
    );
  }
  const items = props.cartItem.map(product => {
    return (
      <CartSummaryItem key={product.id}
        image= {product.image}
        name = {product.name}
        price = {product.price}
        shortDescription={product.shortDescription}/>
    );
  });
  const total = getCartTotal(props);
  return (
    <div>
      <button type="button" className= "btn btn-link mt-4" onClick= {() => props.setView('catalog', {})}>
        {'<'}  Back to Catalog
      </button>
      <h5>My Cart</h5>
      <div>{items}</div>

      <p>Item Total ${(total / 100).toFixed(2)}</p>
      <button type="button" className= "btn btn-primary" onClick= {() => props.setView('checkout', {})}>
          Checkout </button>

    </div>

  );

}
function getCartTotal(props) {
  var totalprice = 0;
  for (var i = 0; i < props.cartItem.length; i++) {
    totalprice += props.cartItem[i].price;
  }
  return totalprice;
}

export default CartSummary;
